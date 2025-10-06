import { useAnalytics } from "@/hooks/use-analytics";

export default function SpecialOffer() {
  const { trackEvent, trackConversion } = useAnalytics();

  const handleOfferCallClick = () => {
    trackConversion("call");
    trackEvent("offer_call_click", "/");
  };

  const handleOfferWhatsAppClick = () => {
    trackConversion("whatsapp");
    trackEvent("offer_whatsapp_click", "/");
  };

  return (
    <section className="py-8 bg-gradient-to-r from-accent-orange to-accent-orange-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Festival Season Special Offer!</h2>
          <p className="text-lg sm:text-xl mb-6">Book During Festival Season and Get FREE Filter Cleaning + 15% OFF on AMC</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="tel:+919702525317" 
              onClick={handleOfferCallClick}
              data-testid="offer-call"
              className="bg-white text-accent-orange font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call Now - Limited Time
            </a>
            <a 
              href="https://wa.me/919702525317?text=Hi%20I%20want%20to%20book%20Festival%20Season%20Special%20AC%20service%20offer" 
              onClick={handleOfferWhatsAppClick}
              data-testid="offer-whatsapp"
              className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-600 transition-colors"
            >
              💬 WhatsApp for Festival Offer
            </a>
          </div>
          <div className="mt-4 text-sm">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full animate-pulse" data-testid="offer-expiry">
              🎆 Festival Season Offer Valid Till: October 31st
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
