import { useAnalytics } from "@/hooks/use-analytics";

export default function HeroSection() {
  const { trackEvent, trackConversion } = useAnalytics();

  const handleCallClick = (phoneNumber: string) => {
    trackConversion('call');
    trackEvent(`call_click_${phoneNumber.replace(/\D/g, '')}`, "/");
  };

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp');
    trackEvent("whatsapp_click", "/");
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 lg:py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            {/* Urgency Badge */}
            <div className="inline-flex items-center bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="animate-pulse mr-2">⚡</span>
              Festival Season AC Service ₹499 - Limited Slots Available
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Same-Day AC Service in{" "}
              <span className="text-trust-blue">Dahisar, Borivali, Kandivali, Mira Road</span> & Nearby
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional AC repair, installation, uninstallation & AMC services. 
              Licensed technicians, transparent pricing, same-day service guarantee.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mb-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Same-Day Service
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Licensed Technicians
              </div>
              <div className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Warranty Included
              </div>
            </div>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {/* Call Primary */}
              <a
                href="tel:+919702525317"
                onClick={() => handleCallClick("+919702525317")}
                className="bg-trust-blue hover:bg-trust-blue-light text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                data-testid="hero-call-primary"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call +91 97025 25317
              </a>

              {/* WhatsApp Secondary */}
              <a
                href="https://wa.me/919702525317?text=Hi%20I%20need%20AC%20service%20in%20Dahisar.%20My%20number%20is%20______.%20Please%20call%20me%20back."
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center"
                data-testid="hero-whatsapp"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                WhatsApp Now
              </a>
            </div>

            {/* Secondary Phone Number */}
            <div className="text-center lg:text-left">
              <p className="text-gray-600 mb-2">Or call our second number:</p>
              <a
                href="tel:+919833537965"
                onClick={() => handleCallClick("+919833537965")}
                className="text-trust-blue hover:text-trust-blue-light font-semibold text-lg"
                data-testid="hero-call-secondary"
              >
                +91 98335 37965
              </a>
            </div>

            {/* Service Areas */}
            <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border">
              <p className="text-sm text-gray-600 mb-2">Serving Areas:</p>
              <div className="flex flex-wrap gap-2">
                {["Dahisar", "Borivali", "Mira Road", "Kandivali", "Malad"].map((area) => (
                  <span key={area} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&w=800&h=600&fit=crop&crop=center"
                alt="Professional AC technician servicing air conditioner in Mumbai"
                className="w-full h-auto"
                loading="eager"
              />
              {/* Overlay with trust indicators */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="text-sm opacity-90">Licensed & Insured</p>
                    <p className="font-semibold">Same-Day Service</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-90">Starting from</p>
                    <p className="font-bold text-2xl">₹499</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="flex items-center">
                <div className="text-yellow-400 text-2xl mr-2">⭐⭐⭐⭐⭐</div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">4.8/5</p>
                  <p className="text-xs text-gray-600">200+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
