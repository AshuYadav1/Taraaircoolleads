import { useState } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InteractiveServiceModal({ isOpen, onClose }: ServiceModalProps) {
  const { trackEvent } = useAnalytics();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedUrgency, setSelectedUrgency] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    problem: ""
  });

  const services = [
    { id: "repair", name: "AC Repair", icon: "🔧", price: "₹499 onwards", description: "Fix cooling, noise, leakage issues" },
    { id: "installation", name: "AC Installation", icon: "⚡", price: "₹2,999 onwards", description: "Complete installation with piping" },
    { id: "maintenance", name: "AC Service/AMC", icon: "🛠️", price: "₹799 onwards", description: "Cleaning, gas check, maintenance" },
    { id: "gas-filling", name: "Gas Filling", icon: "❄️", price: "₹1,499 onwards", description: "Gas refill with leak detection" }
  ];

  const areas = [
    "Dahisar West", "Dahisar East", "Borivali West", "Borivali East",
    "Mira Road East", "Mira Road West", "Kandivali West", "Kandivali East",
    "Malad West", "Malad East", "Bhayander", "Naigaon"
  ];

  const urgencyLevels = [
    { id: "emergency", name: "Emergency (Same Day)", icon: "🚨", extra: "+₹200" },
    { id: "urgent", name: "Urgent (Within 24 hrs)", icon: "⚡", extra: "No extra charge" },
    { id: "normal", name: "Normal (2-3 days)", icon: "📅", extra: "10% discount" }
  ];

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentStep(2);
    trackEvent("modal_service_select", `/service-${serviceId}`);
  };

  const handleAreaSelect = (area: string) => {
    setSelectedArea(area);
    setCurrentStep(3);
    trackEvent("modal_area_select", `/area-${area}`);
  };

  const handleUrgencySelect = (urgencyId: string) => {
    setSelectedUrgency(urgencyId);
    setCurrentStep(4);
    trackEvent("modal_urgency_select", `/urgency-${urgencyId}`);
  };

  const handleSubmit = () => {
    const selectedServiceObj = services.find(s => s.id === selectedService);
    const urgencyObj = urgencyLevels.find(u => u.id === selectedUrgency);
    
    const message = `Hi, I need ${selectedServiceObj?.name} in ${selectedArea}. 
Urgency: ${urgencyObj?.name}
Customer: ${customerInfo.name}
Phone: ${customerInfo.phone}
Problem: ${customerInfo.problem}
From: Tara AC Website`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919702525317?text=${encodedMessage}`, '_blank');
    
    trackEvent("modal_submit", `/complete-${selectedService}-${selectedArea}-${selectedUrgency}`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-trust-blue text-white p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">Get Instant Quote</h2>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200"
              data-testid="modal-close"
            >
              ✕
            </button>
          </div>
          <div className="mt-2 flex space-x-2">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className={`h-2 flex-1 rounded ${
                  step <= currentStep ? 'bg-accent-orange' : 'bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">What service do you need?</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-trust-blue hover:bg-blue-50 transition-all text-left"
                    data-testid={`modal-service-${service.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{service.icon}</span>
                        <div>
                          <div className="font-medium">{service.name}</div>
                          <div className="text-sm text-gray-600">{service.description}</div>
                        </div>
                      </div>
                      <div className="text-trust-blue font-semibold">{service.price}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Area Selection */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Select your area:</h3>
              <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                {areas.map((area) => (
                  <button
                    key={area}
                    onClick={() => handleAreaSelect(area)}
                    className="p-3 border border-gray-200 rounded-lg hover:border-trust-blue hover:bg-blue-50 transition-all text-sm"
                    data-testid={`modal-area-${area.replace(/\s+/g, '-').toLowerCase()}`}
                  >
                    📍 {area}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Urgency Selection */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">When do you need service?</h3>
              <div className="space-y-3">
                {urgencyLevels.map((urgency) => (
                  <button
                    key={urgency.id}
                    onClick={() => handleUrgencySelect(urgency.id)}
                    className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-trust-blue hover:bg-blue-50 transition-all text-left"
                    data-testid={`modal-urgency-${urgency.id}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{urgency.icon}</span>
                        <div className="font-medium">{urgency.name}</div>
                      </div>
                      <div className={`text-sm font-medium ${
                        urgency.id === 'emergency' ? 'text-red-600' : 
                        urgency.id === 'normal' ? 'text-green-600' : 'text-gray-600'
                      }`}>
                        {urgency.extra}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Customer Information */}
          {currentStep === 4 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Your contact details:</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                    placeholder="Enter your name"
                    data-testid="modal-input-name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                    placeholder="Enter your phone number"
                    data-testid="modal-input-phone"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Describe the problem (optional)
                  </label>
                  <textarea
                    value={customerInfo.problem}
                    onChange={(e) => setCustomerInfo({...customerInfo, problem: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-trust-blue focus:border-transparent"
                    rows={3}
                    placeholder="e.g., AC not cooling, making noise, water leakage..."
                    data-testid="modal-input-problem"
                  />
                </div>

                {/* Summary */}
                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <h4 className="font-medium text-gray-900 mb-2">Service Summary:</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>• Service: <span className="font-medium">{services.find(s => s.id === selectedService)?.name}</span></div>
                    <div>• Area: <span className="font-medium">{selectedArea}</span></div>
                    <div>• Urgency: <span className="font-medium">{urgencyLevels.find(u => u.id === selectedUrgency)?.name}</span></div>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!customerInfo.name || !customerInfo.phone}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-colors"
                  data-testid="modal-submit-whatsapp"
                >
                  💬 Send Quote Request on WhatsApp
                </button>

                <div className="text-center">
                  <button
                    onClick={() => window.open('tel:+919702525317')}
                    className="text-trust-blue hover:underline font-medium"
                    data-testid="modal-call-instead"
                  >
                    📞 Or call directly: +91 97025-25317
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}