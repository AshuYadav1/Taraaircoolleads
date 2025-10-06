import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAnalytics } from "@/hooks/use-analytics";
import LeadQualification from "./lead-qualification";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  service: z.enum(["repair", "installation", "uninstallation", "amc", "sales", "gas-filling"]),
  area: z.enum(["Dahisar", "Borivali", "Mira Road", "Kandivali", "Malad", "Other"]),
  urgency: z.enum(["today", "this-week", "next-week", "no-rush"]),
  budget: z.enum(["500-1000", "1000-2000", "2000-5000", "5000-10000", "10000+", "not-sure"]),
  acType: z.enum(["split", "window", "cassette", "ductable", "new", "not-sure"]),
  issue: z.string().optional(),
  message: z.string().optional(),
  source: z.string().default("contact_form"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const serviceOptions = [
  { value: "repair", label: "AC Repair Service", price: "₹499", description: "Same-day repair for all AC brands" },
  { value: "installation", label: "AC Installation", price: "₹1,999", description: "Professional installation with mounting" },
  { value: "gas-filling", label: "AC Gas Filling", price: "₹799", description: "Gas filling with leak detection" },
  { value: "amc", label: "AC AMC Service", price: "₹2,999", description: "Annual maintenance contract" },
  { value: "uninstallation", label: "AC Uninstallation", price: "₹599", description: "Safe AC removal and disposal" },
  { value: "sales", label: "AC Sales", price: "Quote", description: "New AC purchase with installation" },
];

const areaOptions = [
  { value: "Dahisar", label: "Dahisar (West & East)" },
  { value: "Borivali", label: "Borivali (West & East)" },
  { value: "Mira Road", label: "Mira Road" },
  { value: "Kandivali", label: "Kandivali (West & East)" },
  { value: "Malad", label: "Malad (West & East)" },
  { value: "Other", label: "Other Area" },
];

const urgencyOptions = [
  { value: "today", label: "Today (Emergency)", color: "text-red-600" },
  { value: "this-week", label: "This Week (Urgent)", color: "text-orange-600" },
  { value: "next-week", label: "Next Week", color: "text-blue-600" },
  { value: "no-rush", label: "No Rush (Planning)", color: "text-green-600" },
];

const budgetOptions = [
  { value: "500-1000", label: "₹500 - ₹1,000", description: "Basic repair services" },
  { value: "1000-2000", label: "₹1,000 - ₹2,000", description: "Standard repair & gas filling" },
  { value: "2000-5000", label: "₹2,000 - ₹5,000", description: "Installation & major repairs" },
  { value: "5000-10000", label: "₹5,000 - ₹10,000", description: "AMC & multiple services" },
  { value: "10000+", label: "₹10,000+", description: "Premium services & new AC" },
  { value: "not-sure", label: "Not Sure", description: "Need consultation" },
];

export default function ContactForm() {
  const { trackEvent, trackConversion } = useAnalytics();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showLeadQualification, setShowLeadQualification] = useState(false);
  const [leadQuality, setLeadQuality] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      source: "contact_form",
    },
  });

  const watchedService = watch("service");
  const watchedUrgency = watch("urgency");
  const watchedArea = watch("area");
  const watchedBudget = watch("budget");

  const calculateLeadQuality = () => {
    let score = 0;
    let reasons: string[] = [];

    if (watchedUrgency === "today") { score += 3; reasons.push("Emergency urgency"); }
    else if (watchedUrgency === "this-week") { score += 2; reasons.push("Urgent need"); }

    if (watchedArea && ["Dahisar", "Borivali", "Mira Road"].includes(watchedArea)) { score += 2; reasons.push("Primary service area"); }

    if (watchedBudget && ["1000-2000", "2000-5000", "5000-10000", "10000+"].includes(watchedBudget)) { score += 2; reasons.push("Good budget range"); }

    if (watchedService && ["repair", "installation", "gas-filling"].includes(watchedService)) { score += 1; reasons.push("High-demand service"); }

    if (score >= 6) return { quality: "High Quality - Priority Lead", score, reasons };
    if (score >= 4) return { quality: "Medium Quality - Good Lead", score, reasons };
    return { quality: "Low Quality - Needs Follow-up", score, reasons };
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      trackEvent("contact_form_submit", "/");
      
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, leadQuality: calculateLeadQuality(), timestamp: new Date().toISOString() }),
      });

      if (response.ok) {
        trackConversion("form");
        setIsSubmitted(true);
        setLeadQuality(calculateLeadQuality().quality);
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      trackEvent("contact_form_error", "/");
    }
  };

  const handleLeadQualified = (leadData: any) => {
    setValue("name", leadData.name);
    setValue("phone", leadData.phone);
    setValue("service", leadData.serviceType);
    setValue("area", leadData.area);
    setValue("urgency", leadData.urgency);
    setValue("budget", leadData.budget);
    setValue("acType", leadData.acType);
    setValue("issue", leadData.issue);
    setValue("message", `Lead Quality: ${leadData.leadQuality || "High Quality"}`);
    
    setShowLeadQualification(false);
    trackEvent("lead_qualification_complete", "/");
  };

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gray-50" id="contact-form">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-green-500 text-6xl mb-4">✅</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
            <p className="text-xl text-gray-600 mb-6">We've received your request and will contact you within 5 minutes.</p>
            
            {leadQuality && (
              <div className="bg-blue-50 p-4 rounded-lg mb-6"><p className="text-blue-800 font-semibold">Lead Quality: {leadQuality}</p></div>
            )}

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <a href="tel:+919702525317" onClick={() => trackEvent("success_page_call")} className="bg-trust-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-trust-blue-light transition-colors">Call +91 97025 25317</a>
              <a href="https://wa.me/919702525317?text=Hi%20I%20just%20submitted%20a%20form%20for%20AC%20service.%20Please%20call%20me%20back." onClick={() => trackEvent("success_page_whatsapp")} className="bg-green-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-600 transition-colors">WhatsApp Now</a>
            </div>

            <div className="text-sm text-gray-500"><p>Our team will contact you shortly to confirm your appointment.</p><p className="mt-2">For immediate assistance, please call us directly.</p></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50" id="contact-form">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Free AC Service Quote</h2>
          <p className="text-lg text-gray-600">Fill the form below and get instant quote for AC repair, installation, or maintenance</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Map and Address */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h3>
              <div className="aspect-w-16 aspect-h-12 bg-gray-200 rounded-lg mb-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.578431075186!2d72.86055647498216!3d19.25719608198509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1b091bbb8c9%3A0x3ca57554c38f1b3a!2sTara%20Air%20Conditioning%20Sales%20%26%20Service!5e0!3m2!1sen!2sin!4v1759556504611!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border:0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start"><span className="w-6 text-xl">📍</span><p><strong>Address:</strong>Shop no 6 , Dahisar Shivdatt, bldg. No. 3, C. S. Complex road, Panchdham, Anand Nagar, Dahisar East, Mumbai, Maharashtra 400068</p></div>
                <div className="flex items-center"><span className="w-6 text-xl">📞</span><p><strong>Phone:</strong> <a href="tel:+919702525317" className="text-trust-blue hover:underline">+91 97025 25317</a></p></div>
                <div className="flex items-center"><span className="w-6 text-xl">📧</span><p><strong>Email:</strong> <a href="mailto:info@taraaircon.com" className="text-trust-blue hover:underline">info@taraaircon.com</a></p></div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Tara AC Service?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center"><div className="text-3xl mb-3">⚡</div><h4 className="font-semibold text-gray-900 mb-2">Same-Day Service</h4><p className="text-gray-600 text-sm">Emergency AC repair available within 2-4 hours</p></div>
                <div className="text-center"><div className="text-3xl mb-3">🔧</div><h4 className="font-semibold text-gray-900 mb-2">Licensed Technicians</h4><p className="text-gray-600 text-sm">Certified professionals with 10+ years experience</p></div>
                <div className="text-center"><div className="text-3xl mb-3">💰</div><h4 className="font-semibold text-gray-900 mb-2">Transparent Pricing</h4><p className="text-gray-600 text-sm">No hidden charges, upfront pricing with warranty</p></div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                  <input {...register("name")} type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent" placeholder="Enter your full name" />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                  <input {...register("phone")} type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent" placeholder="Enter your phone number" />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Required *</label>
                  <select {...register("service")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent">
                    <option value="">Select service</option>
                    {serviceOptions.map((service) => (<option key={service.value} value={service.value}>{service.label} - {service.price}</option>))}
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Service Area *</label>
                  <select {...register("area")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent">
                    <option value="">Select your area</option>
                    {areaOptions.map((area) => (<option key={area.value} value={area.value}>{area.label}</option>))}
                  </select>
                  {errors.area && <p className="text-red-500 text-sm mt-1">{errors.area.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Urgency *</label>
                  <select {...register("urgency")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent">
                    <option value="">Select urgency</option>
                    {urgencyOptions.map((urgency) => (<option key={urgency.value} value={urgency.value}>{urgency.label}</option>))}
                  </select>
                  {errors.urgency && <p className="text-red-500 text-sm mt-1">{errors.urgency.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Budget Range *</label>
                  <select {...register("budget")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent">
                    <option value="">Select budget</option>
                    {budgetOptions.map((budget) => (<option key={budget.value} value={budget.value}>{budget.label}</option>))}
                  </select>
                  {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">AC Type</label>
                  <select {...register("acType")} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent">
                    <option value="">Select AC type</option>
                    <option value="split">Split AC</option>
                    <option value="window">Window AC</option>
                    <option value="cassette">Cassette AC</option>
                    <option value="ductable">Ductable AC</option>
                    <option value="new">New AC (Installation)</option>
                    <option value="not-sure">Not Sure</option>
                  </select>
                  {errors.acType && <p className="text-red-500 text-sm mt-1">{errors.acType.message}</p>}
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Additional Details</label>
                  <textarea {...register("message")} rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent" placeholder="Describe your AC issue or requirements..." />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
              </div>
              <div className="mt-6">
                <button type="submit" disabled={isSubmitting} className="w-full bg-trust-blue text-white py-3 px-6 rounded-lg font-semibold hover:bg-trust-blue-light transition-colors disabled:opacity-50">{isSubmitting ? "Submitting..." : "Get Free Quote Now"}</button>
              </div>
              <div className="mt-4 text-center text-sm text-gray-500"><p>We'll contact you within 5 minutes</p><p>No hidden charges • Transparent pricing • Same-day service</p></div>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-500 mb-3">Need detailed service consultation?</p>
                <button type="button" onClick={() => setShowLeadQualification(true)} className="text-trust-blue hover:text-trust-blue-light font-medium text-sm underline">Advanced Service Qualification →</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {showLeadQualification && (<LeadQualification onQualified={handleLeadQualified} onClose={() => setShowLeadQualification(false)} />)}
    </section>
  );
}
