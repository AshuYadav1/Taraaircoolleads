import { useAnalytics } from "@/hooks/use-analytics";

export default function StickyMobileFooter() {
  const { trackEvent, trackConversion } = useAnalytics();

  const handleStickyCallClick = () => {
    trackConversion("call");
    trackEvent("sticky_call_click", "/");
  };

  const handleStickyWhatsAppClick = () => {
    trackConversion("whatsapp");
    trackEvent("sticky_whatsapp_click", "/");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-50 lg:hidden">
      <div className="flex">
        <a 
          href="tel:+919876543210" 
          onClick={handleStickyCallClick}
          data-testid="sticky-call"
          className="flex-1 bg-trust-blue text-white text-center py-4 font-bold hover:bg-trust-blue-light transition-colors"
        >
          📞 Call Now
        </a>
        <a 
          href="https://wa.me/919876543210?text=Hi%20I%20need%20AC%20service%20in%20Dahisar" 
          onClick={handleStickyWhatsAppClick}
          data-testid="sticky-whatsapp"
          className="flex-1 bg-green-500 text-white text-center py-4 font-bold hover:bg-green-600 transition-colors"
        >
          💬 WhatsApp
        </a>
      </div>
    </div>
  );
}
