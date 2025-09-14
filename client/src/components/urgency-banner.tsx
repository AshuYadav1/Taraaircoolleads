import { useState, useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function UrgencyBanner() {
  const { trackEvent } = useAnalytics();
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches zero
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCallClick = () => {
    trackEvent("urgency_banner_call_click", "/");
  };

  const handleWhatsAppClick = () => {
    trackEvent("urgency_banner_whatsapp_click", "/");
  };

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-black opacity-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between relative z-10">
        <div className="flex items-center mb-2 sm:mb-0">
          <span className="text-2xl mr-3">🔥</span>
          <div>
            <span className="font-bold text-lg">SUMMER AC SERVICE OFFER</span>
            <span className="ml-2 text-yellow-300 font-bold">₹499 Only</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Countdown Timer */}
          <div className="flex items-center space-x-2">
            <span className="text-sm">Limited Time:</span>
            <div className="flex space-x-1">
              <div className="bg-white/20 rounded px-2 py-1 text-sm font-mono">
                {String(timeLeft.hours).padStart(2, '0')}
              </div>
              <span className="text-sm">:</span>
              <div className="bg-white/20 rounded px-2 py-1 text-sm font-mono">
                {String(timeLeft.minutes).padStart(2, '0')}
              </div>
              <span className="text-sm">:</span>
              <div className="bg-white/20 rounded px-2 py-1 text-sm font-mono">
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex space-x-2">
            <a
              href="tel:+919702525317"
              onClick={handleCallClick}
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
              data-testid="urgency-call"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919702525317?text=Hi%20I%20want%20to%20book%20the%20₹499%20AC%20service%20offer.%20My%20number%20is%20______."
              onClick={handleWhatsAppClick}
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-green-600 transition-colors"
              data-testid="urgency-whatsapp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Mobile-only simplified version */}
      <div className="sm:hidden text-center mt-2">
        <div className="text-sm mb-2">
          <span className="font-bold">₹499 AC Service</span> - Limited Slots
        </div>
        <div className="flex justify-center space-x-2">
          <a
            href="tel:+919702525317"
            onClick={handleCallClick}
            className="bg-white text-red-600 px-3 py-1 rounded text-xs font-semibold"
          >
            Call +91 97025 25317
          </a>
          <a
            href="https://wa.me/919702525317?text=Hi%20I%20want%20to%20book%20the%20₹499%20AC%20service%20offer."
            onClick={handleWhatsAppClick}
            className="bg-green-500 text-white px-3 py-1 rounded text-xs font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}