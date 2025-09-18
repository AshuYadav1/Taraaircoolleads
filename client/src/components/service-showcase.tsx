import { useAnalytics } from "@/hooks/use-analytics";

const services = [
  {
    id: "repair",
    name: "Emergency AC Repair",
    description: "Same-day emergency repair for all AC brands. Gas filling, water leakage, cooling issues fixed.",
    price: "₹499",
    originalPrice: "₹999",
    features: ["Same-day service", "All brands covered", "90-day warranty", "Emergency response"],
    image: "/api/placeholder/400/300", // Replace with actual AC repair service photo
    popular: true,
    urgency: "🔥 Hot Deal"
  },
  {
    id: "installation",
    name: "AC Installation",
    description: "Professional AC installation with proper mounting, wiring, and testing.",
    price: "₹1,999",
    originalPrice: "₹2,999",
    features: ["Professional installation", "Copper piping", "Electrical work", "Testing included"],
    image: "/api/placeholder/400/300", // Replace with actual AC installation service photo
    popular: false,
    urgency: "⚡ Limited Time"
  },
  {
    id: "gas-filling",
    name: "Emergency AC Gas Filling",
    description: "Professional emergency gas filling service with leak detection and testing.",
    price: "₹1,500",
    originalPrice: "₹2,500",
    features: ["Emergency response", "Leak detection", "Quality gas", "Testing included"],
    image: "/api/placeholder/400/300", // Replace with actual AC installation service photo
    popular: false,
    urgency: "⚡ Quick Service"
  },
  {
    id: "amc",
    name: "Annual AMC",
    description: "Annual Maintenance Contract. Regular cleaning, servicing, and priority support.",
    price: "₹2,499",
    originalPrice: "₹3,999",
    features: ["4 services/year", "Priority support", "Parts discount", "Emergency calls"],
    image: "/api/placeholder/400/300", // Replace with actual AC installation service photo
    popular: false,
    urgency: "🏆 Most Popular"
  },
  {
    id: "cleaning",
    name: "Deep AC Cleaning",
    description: "Professional deep cleaning of AC coils, filters, and internal components.",
    price: "₹799",
    originalPrice: "₹1,299",
    features: ["Deep cleaning", "Coil cleaning", "Filter replacement", "Sanitization"],
    image: "/api/placeholder/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    popular: false,
    urgency: "✨ Fresh Air"
  },
  {
    id: "uninstallation",
    name: "AC Uninstallation",
    description: "Safe AC removal and packing. Gas recovery and proper disposal.",
    price: "₹750",
    originalPrice: "₹1,200",
    features: ["Safe removal", "Gas recovery", "Proper packing", "Disposal service"],
    image: "/api/placeholder/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&w=400&h=300&fit=crop",
    popular: false,
    urgency: "💯 Best Price"
  }
];

export default function ServiceShowcase() {
  const { trackEvent, trackConversion } = useAnalytics();

  const handleServiceClick = (serviceId: string, serviceName: string) => {
    trackEvent(`service_click_${serviceId}`, "/");
    trackConversion('service_inquiry');
  };

  const handleCallClick = (serviceId: string) => {
    trackEvent(`service_call_${serviceId}`, "/");
    trackConversion('call');
  };

  const handleWhatsAppClick = (serviceId: string, serviceName: string) => {
    trackEvent(`service_whatsapp_${serviceId}`, "/");
    trackConversion('whatsapp');
  };

  return (
    <section className="py-16 bg-gray-50" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our AC Services in <span className="text-trust-blue">Dahisar, Borivali, Mira Road</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional AC repair, installation, uninstallation, AMC, and sales services. 
            Same-day service with transparent pricing and warranty.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                service.popular ? 'border-trust-blue ring-2 ring-trust-blue/20' : 'border-gray-200'
              }`}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.name} in Dahisar, Mumbai`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {service.popular && (
                  <div className="absolute top-4 left-4 bg-trust-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded text-xs font-semibold">
                  {service.urgency}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>

                {/* Pricing */}
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-trust-blue">{service.price}</span>
                  {service.originalPrice && (
                    <span className="text-gray-400 line-through ml-2">{service.originalPrice}</span>
                  )}
                  {service.originalPrice && (
                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded ml-2">
                      Save ₹{(parseInt(service.originalPrice.replace(/[^\d]/g, '')) - parseInt(service.price.replace(/[^\d]/g, ''))).toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <span className="text-green-500 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="space-y-3">
                  <button
                    onClick={() => handleServiceClick(service.id, service.name)}
                    className="w-full bg-trust-blue hover:bg-trust-blue-light text-white py-3 px-4 rounded-lg font-semibold transition-colors"
                    data-testid={`service-${service.id}-book`}
                  >
                    Book {service.name}
                  </button>
                  
                  <div className="flex space-x-2">
                    <a
                      href={`tel:+919702525317?text=Hi%20I%20want%20to%20book%20${service.name}%20service.%20My%20number%20is%20______.`}
                      onClick={() => handleCallClick(service.id)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded text-sm font-medium text-center transition-colors"
                      data-testid={`service-${service.id}-call`}
                    >
                      Call Now
                    </a>
                    <a
                      href={`https://wa.me/919702525317?text=Hi%20I%20want%20to%20book%20${service.name}%20service.%20Price%20is%20${service.price}.%20My%20number%20is%20______.`}
                      onClick={() => handleWhatsAppClick(service.id, service.name)}
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-3 rounded text-sm font-medium text-center transition-colors"
                      data-testid={`service-${service.id}-whatsapp`}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-trust-blue to-trust-blue-light text-white rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Need Emergency AC Service?</h3>
            <p className="text-blue-100 mb-6">
              Call us now for same-day service. We serve Dahisar, Borivali, Mira Road, Kandivali, and Malad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919702525317"
                onClick={() => trackEvent("emergency_call_click", "/")}
                className="bg-white text-trust-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                data-testid="emergency-call"
              >
                Call +91 97025 25317
              </a>
              <a
                href="https://wa.me/919702525317?text=Hi%20I%20need%20emergency%20AC%20service.%20My%20number%20is%20______.%20Please%20call%20me%20back%20urgently."
                onClick={() => trackEvent("emergency_whatsapp_click", "/")}
                className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                data-testid="emergency-whatsapp"
              >
                WhatsApp Emergency
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
