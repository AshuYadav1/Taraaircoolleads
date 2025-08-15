import { useAnalytics } from "@/hooks/use-analytics";
import { Button } from "@/components/ui/button";

export default function PricingTable() {
  const { trackEvent, trackConversion } = useAnalytics();

  const pricingData = [
    {
      category: "Emergency AC Repair",
      popular: true,
      services: [
        { name: "AC Not Cooling", price: "₹499", time: "Same Day" },
        { name: "AC Gas Filling/Leak Repair", price: "₹1,500", time: "2-3 Hours" },
        { name: "Compressor Repair", price: "₹3,500", time: "Same Day" },
        { name: "PCB/Control Board Repair", price: "₹2,500", time: "Same Day" },
        { name: "Filter Cleaning", price: "₹299", time: "30 Minutes" },
      ]
    },
    {
      category: "AC Installation Services",
      popular: false,
      services: [
        { name: "Split AC Installation", price: "₹1,999", time: "3-4 Hours" },
        { name: "Window AC Installation", price: "₹999", time: "2 Hours" },
        { name: "AC Uninstallation", price: "₹699", time: "1-2 Hours" },
        { name: "AC Shifting", price: "₹1,499", time: "4-5 Hours" },
        { name: "Copper Piping (per foot)", price: "₹85", time: "As needed" },
      ]
    },
    {
      category: "Maintenance & AMC",
      popular: false,
      services: [
        { name: "Basic AC Service", price: "₹599", time: "1 Hour" },
        { name: "Deep AC Cleaning", price: "₹999", time: "2 Hours" },
        { name: "Annual AMC (4 visits)", price: "₹2,499", time: "Year-round" },
        { name: "Pre-Summer AC Checkup", price: "₹799", time: "1.5 Hours" },
        { name: "Chemical Wash", price: "₹1,299", time: "2-3 Hours" },
      ]
    }
  ];

  const handleBookService = (serviceName: string, category: string) => {
    trackConversion("call");
    trackEvent("pricing_table_book", "/");
    const message = `Hi! I want to book ${serviceName} under ${category}. Please provide more details.`;
    window.open(`https://wa.me/919876543210?text=${encodeURIComponent(message)}`);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Transparent AC Service Pricing in Mumbai
          </h2>
          <p className="text-lg text-gray-600">
            No hidden charges • Pay only after service completion • All prices include warranty
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingData.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className={`relative bg-white rounded-2xl shadow-lg border-2 overflow-hidden ${
                category.popular ? 'border-trust-blue' : 'border-gray-200'
              }`}
            >
              {category.popular && (
                <div className="absolute top-0 left-0 right-0 bg-trust-blue text-white text-center py-2 text-sm font-semibold">
                  🔥 Most Popular
                </div>
              )}
              
              <div className={`p-6 ${category.popular ? 'pt-12' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                      data-testid={`service-item-${categoryIndex}-${serviceIndex}`}
                    >
                      <div className="flex-1">
                        <div className="font-medium text-gray-900 text-sm">
                          {service.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          ⏱️ {service.time}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-trust-blue">
                          {service.price}
                        </div>
                        <button
                          onClick={() => handleBookService(service.name, category.category)}
                          className="text-xs text-trust-blue hover:underline"
                          data-testid={`book-btn-${categoryIndex}-${serviceIndex}`}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    onClick={() => trackEvent("pricing_call_category", `/category-${categoryIndex}`)}
                    className="w-full bg-trust-blue hover:bg-trust-blue-light text-white font-semibold py-3"
                    data-testid={`category-cta-${categoryIndex}`}
                  >
                    📞 Call for {category.category}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Special Offers & Guarantees
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-green-600 text-2xl mb-2">💰</div>
              <h4 className="font-semibold mb-2">Price Match Guarantee</h4>
              <p className="text-sm text-gray-600">Find a lower quote? We'll match it!</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-blue-600 text-2xl mb-2">🛡️</div>
              <h4 className="font-semibold mb-2">30-Day Warranty</h4>
              <p className="text-sm text-gray-600">All repairs covered for 30 days</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-orange-600 text-2xl mb-2">⚡</div>
              <h4 className="font-semibold mb-2">Same-Day Service</h4>
              <p className="text-sm text-gray-600">Emergency repairs within 4 hours</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}