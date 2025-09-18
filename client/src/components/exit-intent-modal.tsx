import { useState, useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

interface ExitIntentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ExitIntentModal({ isOpen, onClose }: ExitIntentModalProps) {
  const { trackEvent, trackConversion } = useAnalytics();
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone && area) {
      trackConversion("form");
      trackEvent("exit_intent_form_submit", "modal");
      
      // Here you would normally send to your lead capture system
      alert(`Thank you! We'll call you within 30 minutes at ${phone} for AC service in ${area}.`);
      onClose();
    }
  };

  const handleCallClick = () => {
    trackEvent("exit_intent_call", "modal");
    window.open("tel:+919702525317");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 opacity-100 transition-opacity duration-300">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative transform transition-transform duration-300 scale-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
          data-testid="exit-modal-close"
        >
          ×
        </button>
        
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">🛑</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Wait! Don't Leave Without Your Special Offer
          </h2>
          <p className="text-gray-600">
            Get <span className="text-red-500 font-bold">₹500 OFF</span> your first AC service
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="tel"
              placeholder="Your mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
              required
              data-testid="exit-modal-phone"
            />
          </div>
          
          <div>
            <select
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-orange focus:border-transparent"
              required
              data-testid="exit-modal-area"
            >
              <option value="">Select your area</option>
              <option value="Dahisar">Dahisar</option>
              <option value="Borivali">Borivali</option>
              <option value="Kandivali">Kandivali</option>
              <option value="Malad">Malad</option>
              <option value="Mira Road">Mira Road</option>
              <option value="Bhayandar">Bhayandar</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-accent-orange to-red-500 text-white font-bold py-3 px-6 rounded-lg hover:from-red-500 hover:to-accent-orange transition-all transform hover:scale-105"
            data-testid="exit-modal-submit"
          >
            🎉 Claim ₹500 Discount Now
          </button>
        </form>
        
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500 mb-3">Or call us directly:</p>
          <button
            onClick={handleCallClick}
            className="bg-green-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-green-600 transition-colors"
            data-testid="exit-modal-call"
          >
            📞 Call +91-98765-43210
          </button>
        </div>
        
        <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
          <div className="flex items-center text-sm text-yellow-800">
            <span className="mr-2">⚡</span>
            <span>Limited time offer • Same-day service available • No hidden charges</span>
          </div>
        </div>
      </div>
    </div>
  );
}