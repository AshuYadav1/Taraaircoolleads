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
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleUrgencyClick = () => {
    trackEvent("urgency_banner_click", "/");
  };

  return (
    <div className="bg-red-600 text-white py-3 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-pulse"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center text-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xl">🚨</span>
            <span className="font-bold">LIMITED TIME OFFER:</span>
            <span>Summer AC Service ₹499 Only</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm">Ends in:</span>
            <div className="bg-white text-red-600 px-2 py-1 rounded font-mono text-sm">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
          <button
            onClick={handleUrgencyClick}
            data-testid="urgency-cta"
            className="bg-yellow-400 text-red-600 px-4 py-1 rounded-full font-bold text-sm hover:bg-yellow-300 transition-colors"
          >
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
}