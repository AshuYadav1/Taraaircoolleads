import { useAnalytics } from "@/hooks/use-analytics";

const services = [
  {
    id: "repair",
    title: "AC Repair",
    description: "Any Brand, Any Model, Fast Fix. Cooling issues, gas leaks, compressor problems.",
    price: "Starting from ₹499",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    ),
    bgColor: "bg-trust-blue",
  },
  {
    id: "installation",
    title: "AC Installation",
    description: "Professional installation with proper mounting, piping & electrical connections.",
    price: "Starting from ₹1,999",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    ),
    bgColor: "bg-green-600",
  },
  {
    id: "amc",
    title: "Annual AMC",
    description: "Regular maintenance to keep your AC running efficiently all year round.",
    price: "Starting from ₹2,499/year",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
      </svg>
    ),
    bgColor: "bg-purple-600",
  },
  {
    id: "sales",
    title: "AC Sales",
    description: "Brand new ACs from top manufacturers with installation & warranty included.",
    price: "Best Prices Guaranteed",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
      </svg>
    ),
    bgColor: "bg-accent-orange",
  },
];

export default function ServiceShowcase() {
  const { trackEvent } = useAnalytics();

  const handleServiceClick = (serviceId: string) => {
    trackEvent(`service_click_${serviceId}`, "/");
    // Scroll to contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AC Services in Dahisar & Nearby Areas</h2>
          <p className="text-lg text-gray-600">Professional AC solutions for homes and businesses across Mumbai's Western Suburbs</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 hover:border-trust-blue cursor-pointer"
              onClick={() => handleServiceClick(service.id)}
              data-testid={`service-card-${service.id}`}
            >
              <div className={`${service.bgColor} text-white p-3 rounded-lg w-fit mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="text-trust-blue font-semibold" data-testid={`service-price-${service.id}`}>
                {service.price}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
