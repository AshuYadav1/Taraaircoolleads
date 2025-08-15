import { useState, useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function StickyMobileFooter() {
  const { trackEvent, trackConversion } = useAnalytics();
  const [showPulse, setShowPulse] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    "🔥 AC Service ₹499 Only!",
    "⚡ Same Day Service Available",
    "💯 500+ Happy Customers",
    "🛡️ 30-Day Warranty Included"
  ];

  useEffect(() => {
    // Show pulse animation every 15 seconds
    const pulseInterval = setInterval(() => {
      setShowPulse(true);
      setTimeout(() => setShowPulse(false), 2000);
    }, 15000);

    // Rotate offers every 4 seconds
    const offerInterval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000);

    return () => {
      clearInterval(pulseInterval);
      clearInterval(offerInterval);
    };
  }, []);

  const handleStickyCallClick = () => {
    trackConversion("call");
    trackEvent("sticky_call_click", "/");
  };

  const handleStickyWhatsAppClick = () => {
    trackConversion("whatsapp");
    trackEvent("sticky_whatsapp_click", "/");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 lg:hidden">
      {/* Rotating Offer Banner */}
      <div className="bg-gradient-to-r from-accent-orange to-red-500 text-white py-2 px-4 text-center text-sm font-medium animate-slide-in">
        {offers[currentOffer]}
      </div>
      
      {/* Action Buttons */}
      <div className="flex">
        <a
          href="tel:+919876543210"
          onClick={handleStickyCallClick}
          data-testid="sticky-call"
          className={`flex-1 bg-accent-orange hover:bg-accent-orange-light text-white py-4 px-6 text-center font-bold text-lg flex items-center justify-center transition-all ${
            showPulse ? 'animate-pulse bg-red-500' : ''
          }`}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          Call Now
          <span className="ml-1 text-xs">₹499</span>
        </a>
        
        <a
          href="https://wa.me/919876543210?text=Hi%20I%20need%20AC%20service%20in%20Mumbai.%20I%20saw%20your%20website.%20Please%20provide%20quote%20for%20my%20area."
          onClick={handleStickyWhatsAppClick}
          data-testid="sticky-whatsapp"
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 px-6 text-center font-bold text-lg flex items-center justify-center transition-all relative"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          WhatsApp
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
            !
          </span>
        </a>
      </div>
      
      {/* Trust Indicators */}
      <div className="bg-gray-50 py-2 px-4 flex justify-center items-center text-xs text-gray-600">
        <span className="flex items-center mr-4">
          ⭐ 4.8/5 Rating
        </span>
        <span className="flex items-center mr-4">
          ✅ Licensed & Insured
        </span>
        <span className="flex items-center">
          🔒 Pay After Service
        </span>
      </div>
    </div>
  );
}
