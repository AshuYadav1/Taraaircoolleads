import { useEffect } from "react";
import { useAnalytics } from "@/hooks/use-analytics";
import UrgencyBanner from "@/components/urgency-banner";
import HeroSection from "@/components/hero-section";
import TrustAccelerator from "@/components/trust-accelerator";
import AdvancedLeadMagnet from "@/components/advanced-lead-magnet";
import ServiceShowcase from "@/components/service-showcase";
import VideoGallery from "@/components/video-gallery";
import ACServiceGallery from "@/components/ac-service-gallery";
import PricingTable from "@/components/pricing-table";
import WhyChooseUs from "@/components/why-choose-us";
import SocialProof from "@/components/social-proof";
import SpecialOffer from "@/components/special-offer";
import SEOContentSection from "@/components/seo-content-section";
import FAQSection from "@/components/faq-section";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import StickyMobileFooter from "@/components/sticky-mobile-footer";
import FloatingWidgets from "@/components/floating-widgets";
import ExitIntentModal from "@/components/exit-intent-modal";
import LiveChatWidget from "@/components/live-chat-widget";
import ScrollProgress from "@/components/scroll-progress";
import { useExitIntent } from "@/hooks/use-exit-intent";

export default function Home() {
  const { trackEvent } = useAnalytics();
  const { showExitIntent, closeExitIntent } = useExitIntent();

  useEffect(() => {
    trackEvent("page_view", "/");
  }, [trackEvent]);

  const handleHeaderCallClick = () => {
    trackEvent("header_call_click", "/");
  };

  const handleHeaderWhatsAppClick = () => {
    trackEvent("header_whatsapp_click", "/");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollProgress />
      <UrgencyBanner />
      
      {/* Header with sticky navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-trust-blue">Tara AC Service</h1>
              <span className="ml-3 text-sm text-gray-600 hidden sm:block">Dahisar, Mumbai</span>
            </div>
            <div className="flex items-center space-x-3">
              <a 
                href="tel:+919702525317" 
                className="flex items-center text-sm text-trust-blue font-medium hover:text-trust-blue-light"
                data-testid="header-call"
                onClick={handleHeaderCallClick}
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="hidden sm:block">Call Now</span>
              </a>
              <a 
                href="https://wa.me/919702525317?text=Hi%20I%20need%20AC%20service%20in%20Dahisar" 
                className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
                data-testid="header-whatsapp"
                onClick={handleHeaderWhatsAppClick}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <TrustAccelerator />
        <AdvancedLeadMagnet />
        <ServiceShowcase />
        <VideoGallery />
        <ACServiceGallery />
        <PricingTable />
        <WhyChooseUs />
        <SocialProof />
        <SpecialOffer />
        <SEOContentSection />
        <FAQSection />
        <ContactForm />
      </main>

      <Footer />
      <StickyMobileFooter />
      <FloatingWidgets />
      <LiveChatWidget />
      <ExitIntentModal 
        isOpen={showExitIntent} 
        onClose={closeExitIntent} 
      />
    </div>
  );
}
