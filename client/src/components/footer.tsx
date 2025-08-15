import { useAnalytics } from "@/hooks/use-analytics";

export default function Footer() {
  const { trackEvent, trackConversion } = useAnalytics();

  const handleFooterCallClick = () => {
    trackConversion("call");
    trackEvent("footer_call_click", "/");
  };

  const handleFooterWhatsAppClick = () => {
    trackConversion("whatsapp");
    trackEvent("footer_whatsapp_click", "/");
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Tara Air Conditioning Sales & Service</h3>
            <p className="text-gray-300 mb-4">
              Professional AC repair, installation, and maintenance services in Mumbai's Western Suburbs. 
              Trusted by 500+ families since 2013.
            </p>
            <div className="flex space-x-4">
              <a 
                href="tel:+919876543210" 
                onClick={handleFooterCallClick}
                data-testid="footer-call"
                className="bg-trust-blue hover:bg-trust-blue-light px-4 py-2 rounded-lg transition-colors"
              >
                📞 Call Now
              </a>
              <a 
                href="https://wa.me/919876543210" 
                onClick={handleFooterWhatsAppClick}
                data-testid="footer-whatsapp"
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white" data-testid="footer-service-repair">AC Repair</a></li>
              <li><a href="#" className="hover:text-white" data-testid="footer-service-installation">AC Installation</a></li>
              <li><a href="#" className="hover:text-white" data-testid="footer-service-amc">Annual AMC</a></li>
              <li><a href="#" className="hover:text-white" data-testid="footer-service-sales">AC Sales</a></li>
              <li><a href="#" className="hover:text-white" data-testid="footer-service-gas">Gas Filling</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300" data-testid="footer-service-areas">
              <li>Dahisar West & East</li>
              <li>Borivali West & East</li>
              <li>Mira Road</li>
              <li>Kandivali West & East</li>
              <li>Malad West & East</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400" data-testid="footer-copyright">
            © 2024 Tara Air Conditioning Sales & Service. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white" data-testid="footer-privacy">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white" data-testid="footer-terms">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white" data-testid="footer-contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
