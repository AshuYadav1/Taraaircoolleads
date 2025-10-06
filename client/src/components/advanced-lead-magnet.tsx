import { useState } from "react";
import { useAnalytics } from "@/hooks/use-analytics";
import { Button } from "@/components/ui/button";

export default function AdvancedLeadMagnet() {
  const { trackEvent, trackConversion } = useAnalytics();
  const [selectedService, setSelectedService] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const services = [
    { id: "emergency-repair", name: "Emergency AC Repair", price: "₹499", urgent: true },
    { id: "ac-installation", name: "AC Installation", price: "₹1,999", urgent: false },
    { id: "ac-gas-filling", name: "Emergency AC Gas Filling", price: "₹1,500", urgent: true },
    { id: "amc-service", name: "Annual AMC", price: "₹2,499", urgent: false },
    { id: "ac-cleaning", name: "Deep AC Cleaning", price: "₹799", urgent: false },
  ];

  const areas = [
    "Dahisar West", "Dahisar East", "Borivali West", "Borivali East", 
    "Mira Road", "Kandivali West", "Kandivali East", "Malad West", "Malad East"
  ];

  const handleQuickCall = () => {
    trackConversion("call");
    trackEvent("lead_magnet_call", "/");
    window.location.href = "tel:+919702525317";
  };

  const handleQuickWhatsApp = () => {
    trackConversion("whatsapp");
    trackEvent("lead_magnet_whatsapp", "/");
    const message = `Hi! I need ${selectedService ? services.find(s => s.id === selectedService)?.name : 'AC service'} in ${selectedArea || 'Mumbai'}. Please provide quote.`;
    window.open(`https://wa.me/919702525317?text=${encodeURIComponent(message)}`);
  };

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    trackEvent("service_selector_click", "/");
  };

  const selectedServiceData = services.find(s => s.id === selectedService);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Get Instant Quote for Your AC Service
            </h3>
            <p className="text-gray-600">
              Select your service and area to get accurate pricing and book instantly
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Selection */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Select Your AC Service:</h4>
              <div className="space-y-3">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedService === service.id
                        ? "border-trust-blue bg-trust-blue/5"
                        : "border-gray-200 hover:border-trust-blue/50"
                    }`}
                    data-testid={`service-option-${service.id}`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        {service.urgent && (
                          <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full mr-2">
                            Emergency
                          </span>
                        )}
                        <span className="font-medium">{service.name}</span>
                      </div>
                      <span className="text-trust-blue font-bold">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Area Selection & CTA */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Select Your Area:</h4>
              <select
                value={selectedArea}
                onChange={(e) => setSelectedArea(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mb-6"
                data-testid="area-selector"
              >
                <option value="">Choose your location</option>
                {areas.map((area) => (
                  <option key={area} value={area}>{area}</option>
                ))}
              </select>

              {selectedServiceData && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-semibold text-green-800">
                        {selectedServiceData.name}
                      </h5>
                      <p className="text-green-600 text-sm">
                        Starting from {selectedServiceData.price}
                      </p>
                      {selectedArea && (
                        <p className="text-green-600 text-sm">
                          Service area: {selectedArea}
                        </p>
                      )}
                    </div>
                    {selectedServiceData.urgent && (
                      <span className="text-red-600 font-bold text-sm">
                        🚨 Same Day Service Available
                      </span>
                    )}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <Button
                  onClick={handleQuickCall}
                  className="w-full bg-trust-blue hover:bg-trust-blue-light text-white font-bold py-4 text-lg"
                  data-testid="quick-call-cta"
                >
                  📞 Call Now - Get Instant Quote
                </Button>
                
                <Button
                  onClick={handleQuickWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 text-lg"
                  data-testid="quick-whatsapp-cta"
                >
                  💬 WhatsApp for Quick Response
                </Button>
              </div>

              <div className="mt-4 text-center text-sm text-gray-600">
                <p>⚡ Average response time: 5 minutes</p>
                <p>✅ No hidden charges • Pay after service completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}