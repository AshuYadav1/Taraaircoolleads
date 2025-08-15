import { useState, useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function FloatingWidgets() {
  const { trackEvent } = useAnalytics();
  const [showCallAnimation, setShowCallAnimation] = useState(false);
  const [showWhatsAppTooltip, setShowWhatsAppTooltip] = useState(false);

  useEffect(() => {
    // Show call animation every 30 seconds
    const interval = setInterval(() => {
      setShowCallAnimation(true);
      setTimeout(() => setShowCallAnimation(false), 3000);
    }, 30000);

    // Show WhatsApp tooltip after 10 seconds
    const tooltipTimer = setTimeout(() => {
      setShowWhatsAppTooltip(true);
      setTimeout(() => setShowWhatsAppTooltip(false), 5000);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleCallClick = () => {
    trackEvent("floating_call_click", "widget");
    window.open("tel:+919876543210");
  };

  const handleWhatsAppClick = () => {
    trackEvent("floating_whatsapp_click", "widget");
    window.open("https://wa.me/919876543210?text=Hi%20I%20need%20AC%20service%20in%20Mumbai.%20Please%20provide%20quote.", "_blank");
  };

  const handleVideoCallClick = () => {
    trackEvent("floating_video_call_click", "widget");
    // In real implementation, this would open video call interface
    alert("Video call feature coming soon! Please call +91-98765-43210 for immediate assistance.");
  };

  return (
    <>
      {/* Floating Call Button */}
      <div className="fixed bottom-24 right-6 z-40 md:bottom-8">
        <button
          onClick={handleCallClick}
          className={`bg-accent-orange hover:bg-accent-orange-light text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-110 ${
            showCallAnimation ? 'animate-bounce ring-4 ring-accent-orange/30' : ''
          }`}
          data-testid="floating-call-button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
        </button>
        
        {showCallAnimation && (
          <div className="absolute -top-12 right-0 bg-black text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
            📞 Call for instant help!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
          </div>
        )}
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-40 right-6 z-40 md:bottom-24">
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-110"
          data-testid="floating-whatsapp-button"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
        </button>
        
        {showWhatsAppTooltip && (
          <div className="absolute -top-12 right-0 bg-green-600 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap">
            💬 Quick WhatsApp support!
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-green-600"></div>
          </div>
        )}
      </div>

      {/* Floating Video Call Button */}
      <div className="fixed bottom-56 right-6 z-40 md:bottom-40">
        <button
          onClick={handleVideoCallClick}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-4 shadow-lg transition-all transform hover:scale-110"
          data-testid="floating-video-call-button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
        </button>
      </div>

      {/* Live Customer Notifications */}
      <div className="fixed top-24 right-6 z-30 space-y-3 max-w-xs hidden lg:block">
        <div className="bg-white border-l-4 border-green-500 rounded-lg shadow-lg p-4 transform transition-all duration-500 animate-slide-in-right">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
            <div>
              <div className="text-sm font-medium text-gray-900">Rajesh from Dahisar</div>
              <div className="text-xs text-gray-600">AC repair booking confirmed</div>
              <div className="text-xs text-gray-500">2 minutes ago</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Offer Banner */}
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-30 max-w-xs hidden lg:block">
        <div className="bg-gradient-to-r from-accent-orange to-red-500 text-white rounded-lg p-4 shadow-lg">
          <div className="text-center">
            <div className="text-lg font-bold">🔥 Today Only!</div>
            <div className="text-sm">AC Service + Cleaning</div>
            <div className="text-2xl font-bold">₹499</div>
            <div className="text-xs line-through opacity-75">₹1,299</div>
            <button 
              onClick={handleCallClick}
              className="bg-white text-accent-orange font-bold py-2 px-4 rounded mt-2 text-sm hover:bg-gray-100 transition-colors w-full"
              data-testid="floating-offer-call"
            >
              📞 Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}