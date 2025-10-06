import { useState } from "react";
import { useAnalytics } from "@/hooks/use-analytics";

export default function FloatingWidgets() {
  const { trackEvent, trackConversion } = useAnalytics();
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null);

  const handleCallClick = (phoneNumber: string) => {
    trackConversion('call');
    trackEvent(`floating_call_${phoneNumber.replace(/\D/g, '')}`, "/");
  };

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp');
    trackEvent("floating_whatsapp_click", "/");
  };

  const handleEmailClick = () => {
    trackEvent("floating_email_click", "/");
  };

  const toggleDrawer = (drawerType: string) => {
    setActiveDrawer(activeDrawer === drawerType ? null : drawerType);
  };

  const closeDrawer = () => {
    setActiveDrawer(null);
  };

  return (
    <>
      {/* Floating Action Buttons Container */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 flex flex-col space-y-3">
        
        {/* Info Button */}
        <div className="relative group">
          <button
            onClick={() => toggleDrawer('info')}
            className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${
              activeDrawer === 'info' 
                ? 'bg-orange-500 text-white shadow-orange-500/50' 
                : 'bg-white text-orange-500 hover:bg-orange-500 hover:text-white'
            }`}
            aria-label="Quick info"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
          
          {/* Info Drawer */}
          <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out ${
            activeDrawer === 'info' 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-64">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Quick Info</h3>
                <button 
                  onClick={closeDrawer} 
                  className="text-gray-400 hover:text-gray-600 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ×
                </button>
              </div>
              <div className="space-y-3 text-sm">
                <div className="text-gray-600">
                  <p className="font-semibold text-orange-600 mb-2">Service Areas:</p>
                  <p className="bg-orange-50 p-2 rounded-lg text-xs">Dahisar, Borivali, Mira Road, Kandivali, Malad</p>
                </div>
                <div className="text-gray-600">
                  <p className="font-semibold text-orange-600 mb-2">Service Hours:</p>
                  <p className="bg-orange-50 p-2 rounded-lg text-xs">9 AM - 9 PM (7 days a week)</p>
                </div>
                <div className="text-gray-600">
                  <p className="font-semibold text-orange-600 mb-2">Starting Price:</p>
                  <p className="text-xl font-bold text-green-600 text-center bg-green-50 p-2 rounded-lg">₹499</p>
                </div>
                <div className="text-gray-600">
                  <p className="font-semibold text-orange-600 mb-2">Response Time:</p>
                  <p className="bg-orange-50 p-2 rounded-lg text-xs text-center">Within 5 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Button */}
        <div className="relative group">
          <button
            onClick={() => toggleDrawer('email')}
            className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${
              activeDrawer === 'email' 
                ? 'bg-gray-600 text-white shadow-gray-600/50' 
                : 'bg-white text-gray-600 hover:bg-gray-600 hover:text-white'
            }`}
            data-testid="floating-email"
            aria-label="Email us"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </button>
          
          {/* Email Drawer */}
          <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out ${
            activeDrawer === 'email' 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-64">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Email Us</h3>
                <button 
                  onClick={closeDrawer} 
                  className="text-gray-400 hover:text-gray-600 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ×
                </button>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-gray-700 mb-2">Contact Email:</p>
                  <p className="text-gray-800 font-bold text-sm bg-gray-50 p-2 rounded-lg">kumaracwork73@gmail.com</p>
                  <p className="text-xs text-gray-500 mt-1 text-center">Response within 2 hours</p>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-gray-700 mb-2">Email Topics:</p>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                      Service Inquiries
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                      Quote Requests
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-2"></span>
                      Feedback
                    </li>
                  </ul>
                </div>
                <a
                  href="mailto:kumaracwork73@gmail.com?subject=AC%20Service%20Inquiry&body=Hi%20Tara%20AC%20Service%2C%0A%0AI%20need%20AC%20service%20in%20Dahisar.%20My%20contact%20number%20is%20______.%0A%0APlease%20call%20me%20back.%0A%0AThank%20you."
                  onClick={handleEmailClick}
                  className="w-full bg-gray-600 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-gray-700 transition-colors text-center"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call Button */}
        <div className="relative group">
          <button
            onClick={() => toggleDrawer('call')}
            className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${
              activeDrawer === 'call' 
                ? 'bg-trust-blue text-white shadow-trust-blue/50' 
                : 'bg-white text-trust-blue hover:bg-trust-blue hover:text-white'
            }`}
            data-testid="floating-call"
            aria-label="Call us"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
          </button>
          
          {/* Call Drawer */}
          <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out ${
            activeDrawer === 'call' 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-64">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
                <button 
                  onClick={closeDrawer} 
                  className="text-gray-400 hover:text-gray-600 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ×
                </button>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-trust-blue mb-2">Available Numbers:</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                      <span className="font-medium text-xs">Primary:</span>
                      <a href="tel:+919702525317" className="text-trust-blue font-bold text-sm">+91 97025 25317</a>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                      <span className="font-medium text-xs">Secondary:</span>
                      <a href="tel:+919833537965" className="text-trust-blue font-bold text-sm">+91 98335 37965</a>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">Available 9 AM - 9 PM</p>
                </div>
                <a
                  href="tel:+919702525317"
                  onClick={() => handleCallClick("+919702525317")}
                  className="w-full bg-trust-blue text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-trust-blue-light transition-colors text-center"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <div className="relative group">
          <button
            onClick={() => toggleDrawer('whatsapp')}
            className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center relative ${
              activeDrawer === 'whatsapp' 
                ? 'bg-green-500 text-white shadow-green-500/50' 
                : 'bg-white text-green-500 hover:bg-green-500 hover:text-white'
            }`}
            data-testid="floating-whatsapp"
            aria-label="WhatsApp us"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            {/* Notification Badge */}
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse border border-white">
              1
            </div>
          </button>
          
          {/* WhatsApp Drawer */}
          <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out ${
            activeDrawer === 'whatsapp' 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-64">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">WhatsApp</h3>
                <button 
                  onClick={closeDrawer} 
                  className="text-gray-400 hover:text-gray-600 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ×
                </button>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-green-600 mb-2">Quick Options:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center text-xs">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      AC Repair Service
                    </li>
                    <li className="flex items-center text-xs">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      Installation Quote
                    </li>
                    <li className="flex items-center text-xs">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                      Emergency Service
                    </li>
                  </ul>
                </div>
                <a
                  href="https://wa.me/919702525317?text=Hi%20I%20need%20AC%20service%20in%20Dahisar.%20My%20number%20is%20______.%20Please%20call%20me%20back."
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-500 text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors text-center"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Button */}
        <div className="relative group">
          <button
            onClick={() => toggleDrawer('chat')}
            className={`w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center ${
              activeDrawer === 'chat' 
                ? 'bg-trust-blue text-white shadow-trust-blue/50' 
                : 'bg-white text-trust-blue hover:bg-trust-blue hover:text-white'
            }`}
            aria-label="Live chat"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
          </button>
          
          {/* Chat Drawer */}
          <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ease-out ${
            activeDrawer === 'chat' 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
          }`}>
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 w-64">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Live Chat</h3>
                <button 
                  onClick={closeDrawer} 
                  className="text-gray-400 hover:text-gray-600 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100"
                >
                  ×
                </button>
              </div>
              <div className="space-y-3">
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-trust-blue mb-2">Contact Support:</p>
                  <p className="text-xs bg-blue-50 p-2 rounded-lg">Get instant help from our support team</p>
                </div>
                <div className="text-sm text-gray-600">
                  <p className="font-semibold text-trust-blue mb-2">Quick Help:</p>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-trust-blue rounded-full mr-2"></span>
                      Service Inquiries
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-trust-blue rounded-full mr-2"></span>
                      Technical Support
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-trust-blue rounded-full mr-2"></span>
                      Booking Assistance
                    </li>
                  </ul>
                </div>
                <button className="w-full bg-trust-blue text-white py-2 px-3 rounded-lg text-sm font-semibold hover:bg-trust-blue-light transition-colors text-center">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          trackEvent("scroll_to_top_click", "/");
        }}
        className="fixed bottom-4 right-4 z-40 bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 pointer-events-none"
        id="scroll-to-top"
        aria-label="Scroll to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>

      {/* Backdrop to close drawers when clicking outside */}
      {activeDrawer && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={closeDrawer}
          aria-hidden="true"
        />
      )}

      {/* Scroll to top functionality */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.addEventListener('scroll', function() {
              const scrollButton = document.getElementById('scroll-to-top');
              if (window.scrollY > 300) {
                scrollButton.classList.remove('opacity-0', 'pointer-events-none');
              } else {
                scrollButton.classList.add('opacity-0', 'pointer-events-none');
              }
            });
          `,
        }}
      />
    </>
  );
}