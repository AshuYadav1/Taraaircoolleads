import { useState, useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function UrgencyBanner() {
  const { trackEvent } = useAnalytics();
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 32, seconds: 45 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCallClick = () => {
    trackEvent("urgency_banner_call", "urgency");
    window.open("tel:+919876543210");
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10 animate-pulse"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex items-center text-center md:text-left mb-2 md:mb-0">
          <span className="text-yellow-300 mr-2 text-lg">🔥</span>
          <div>
            <div className="font-bold text-lg">Limited Time: Same-Day AC Service ₹499</div>
            <div className="text-sm opacity-90">Only 3 slots left for today in Dahisar area</div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-xs opacity-80">Offer expires in:</div>
            <div className="font-mono text-xl font-bold">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
          
          <button
            onClick={handleCallClick}
            data-testid="urgency-banner-call"
            className="bg-yellow-400 text-red-600 font-bold py-2 px-6 rounded-lg hover:bg-yellow-300 transition-colors animate-bounce"
          >
            Book Now!
          </button>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-1 right-2 text-white hover:text-gray-300 text-lg"
          data-testid="urgency-banner-close"
        >
          ×
        </button>
      </div>
    </div>
  );
}