import { useAnalytics } from "@/hooks/use-analytics";

export default function SEOContentSection() {
  const { trackEvent } = useAnalytics();

  const handleInternalLinkClick = (link: string) => {
    trackEvent("internal_link_click", link);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row 1: Intro & Why Choose Us */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional AC Repair Services in Dahisar, Borivali & Mira Road
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Looking for reliable <strong>AC repair in Dahisar</strong> or <strong>AC service in Borivali</strong>? 
              Tara Air Conditioning provides same-day AC repair, installation, and maintenance services across Mumbai's Western Suburbs. 
              Our licensed technicians ensure your AC works perfectly with transparent pricing and warranty.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Choose Tara AC Service?
            </h3>
            <div className="space-y-3">
              <div className="flex items-center"><span className="text-green-500 mr-3">✓</span><span className="text-sm">Same-day AC repair service</span></div>
              <div className="flex items-center"><span className="text-green-500 mr-3">✓</span><span className="text-sm">Licensed and insured technicians</span></div>
              <div className="flex items-center"><span className="text-green-500 mr-3">✓</span><span className="text-sm">Transparent pricing - no hidden charges</span></div>
              <div className="flex items-center"><span className="text-green-500 mr-3">✓</span><span className="text-sm">90-day warranty on all repairs</span></div>
              <div className="flex items-center"><span className="text-green-500 mr-3">✓</span><span className="text-sm">Serving Mumbai for 10+ years</span></div>
              <div className="flex items-center"><span className="text-green-500 mr-3">✓</span><span className="text-sm">Emergency AC service available</span></div>
            </div>
          </div>
        </div>

        {/* Row 2: Service Areas & Pricing */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              AC Service Areas We Cover
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg"><h4 className="font-semibold text-blue-900 mb-2">Dahisar AC Service</h4><p className="text-sm text-blue-800">Emergency AC repair, gas filling, installation in Dahisar West & East. Same-day service available.</p></div>
              <div className="bg-green-50 p-4 rounded-lg"><h4 className="font-semibold text-green-900 mb-2">Borivali AC Service</h4><p className="text-sm text-green-800">Professional AC repair and maintenance in Borivali West & East. Licensed technicians.</p></div>
              <div className="bg-orange-50 p-4 rounded-lg"><h4 className="font-semibold text-orange-900 mb-2">Mira Road AC Service</h4><p className="text-sm text-orange-800">Complete AC solutions in Mira Road. Installation, repair, and AMC services.</p></div>
              <div className="bg-purple-50 p-4 rounded-lg"><h4 className="font-semibold text-purple-900 mb-2">Kandivali & Malad</h4><p className="text-sm text-purple-800">AC repair and maintenance in Kandivali and Malad areas. Transparent pricing.</p></div>
            </div>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">AC Service Pricing</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center"><span className="text-sm">Emergency AC Repair</span><span className="font-semibold text-blue-900">₹499</span></div>
              <div className="flex justify-between items-center"><span className="text-sm">AC Installation</span><span className="font-semibold text-blue-900">₹1,999</span></div>
              <div className="flex justify-between items-center"><span className="text-sm">Emergency AC Gas Filling</span><span className="font-semibold text-blue-900">₹1,500</span></div>
              <div className="flex justify-between items-center"><span className="text-sm">Annual AMC</span><span className="font-semibold text-blue-900">₹2,499</span></div>
              <div className="flex justify-between items-center"><span className="text-sm">Deep AC Cleaning</span><span className="font-semibold text-blue-900">₹799</span></div>
              <div className="flex justify-between items-center"><span className="text-sm">AC Uninstallation</span><span className="font-semibold text-blue-900">₹750</span></div>
            </div>
            <p className="text-xs text-blue-700 mt-3">*Prices may vary based on AC type and service requirements</p>
          </div>
        </div>

        {/* Row 3: Common Problems and Local SEO */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Common AC Problems We Fix
                </h3>
                <div className="space-y-3">
                    <div className="flex items-start"><span className="text-red-500 mr-3 mt-1">❄️</span><div><h4 className="font-medium text-gray-900">AC Not Cooling</h4><p className="text-sm text-gray-600">AC not cooling properly? We diagnose and fix cooling issues, gas leaks, and compressor problems.</p></div></div>
                    <div className="flex items-start"><span className="text-blue-500 mr-3 mt-1">💧</span><div><h4 className="font-medium text-gray-900">Water Leakage</h4><p className="text-sm text-gray-600">AC water leakage issues? We fix drainage problems and prevent water damage.</p></div></div>
                    <div className="flex items-start"><span className="text-yellow-500 mr-3 mt-1">🔧</span><div><h4 className="font-medium text-gray-900">Gas Leak & Filling</h4><p className="text-sm text-gray-600">AC gas leak detection and professional gas filling services with warranty.</p></div></div>
                    <div className="flex items-start"><span className="text-green-500 mr-3 mt-1">🔊</span><div><h4 className="font-medium text-gray-900">Unusual Noise</h4><p className="text-sm text-gray-600">AC making strange noises? We identify and fix motor, fan, and bearing issues.</p></div></div>
                </div>
            </div>
            <div className="space-y-8">
                <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">AC Service Near Me</h3>
                    <p className="text-sm text-green-800 mb-4">Looking for <strong>AC service near me</strong> in Mumbai Western Suburbs? We provide quick and reliable AC repair services in:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span><span>Dahisar West</span></div>
                        <div className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span><span>Dahisar East</span></div>
                        <div className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span><span>Borivali West</span></div>
                        <div className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span><span>Borivali East</span></div>
                        <div className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span><span>Mira Road</span></div>
                        <div className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span><span>Kandivali</span></div>
                        <div className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span><span>Malad</span></div>
                        <div className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span><span>Andheri</span></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Need AC Repair in Mumbai? Call Now!
          </h2>
          <p className="text-xl mb-6">
            Same-day service • Licensed technicians • Transparent pricing
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919702525317"
              onClick={() => handleInternalLinkClick("cta_call")}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Call +91 97025 25317
            </a>
            <a
              href="https://wa.me/919702525317?text=Hi%20I%20need%20AC%20repair%20service%20in%20Mumbai"
              onClick={() => handleInternalLinkClick("cta_whatsapp")}
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              WhatsApp Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
