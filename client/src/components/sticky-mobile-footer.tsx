import { useAnalytics } from "@/hooks/use-analytics";

export default function StickyMobileFooter() {
  const { trackEvent, trackConversion } = useAnalytics();

  const handleCallClick = (phoneNumber: string) => {
    trackConversion('call');
    trackEvent(`mobile_footer_call_${phoneNumber.replace(/\D/g, '')}`, "/");
  };

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp');
    trackEvent("mobile_footer_whatsapp_click", "/");
  };

  const handleFormClick = () => {
    trackEvent("mobile_footer_form_click", "/");
    // Scroll to contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 md:hidden">
      <div className="flex items-center justify-between">
        {/* Call Button */}
        <a
          href="tel:+919702525317"
          onClick={() => handleCallClick("+919702525317")}
          className="flex-1 bg-trust-blue text-white py-3 px-2 rounded-lg font-semibold text-center text-sm mr-2"
          data-testid="mobile-footer-call"
        >
          <div className="flex flex-col items-center">
            <svg className="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span>Call Now</span>
          </div>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/919702525317?text=Hi%20I%20need%20AC%20service%20in%20Dahisar.%20My%20number%20is%20______.%20Please%20call%20me%20back."
          onClick={handleWhatsAppClick}
          className="flex-1 bg-green-500 text-white py-3 px-2 rounded-lg font-semibold text-center text-sm mr-2"
          data-testid="mobile-footer-whatsapp"
        >
          <div className="flex flex-col items-center">
            <svg className="w-4 h-4 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            <span>WhatsApp</span>
          </div>
        </a>

        {/* Form Button */}
        <button
          onClick={handleFormClick}
          className="flex-1 bg-accent-orange text-white py-3 px-2 rounded-lg font-semibold text-center text-sm"
          data-testid="mobile-footer-form"
        >
          <div className="flex flex-col items-center">
            <svg className="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
            </svg>
            <span>Get Quote</span>
          </div>
        </button>
      </div>

      {/* Urgency Banner */}
      <div className="mt-2 bg-red-500 text-white text-center py-2 px-3 rounded-lg text-xs font-semibold animate-pulse">
        🔥 ₹499 AC Service - Limited Time Offer! Call +91 97025 25317
      </div>
    </div>
  );
}
