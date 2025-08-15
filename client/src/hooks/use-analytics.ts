import { useCallback } from "react";
import { apiRequest } from "@/lib/queryClient";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    fbq?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function useAnalytics() {
  const trackEvent = useCallback(async (event: string, page?: string) => {
    try {
      // Track in our backend
      await apiRequest("POST", "/api/analytics", {
        event,
        page: page || window.location.pathname,
      });

      // Track in Google Analytics 4
      if (window.gtag) {
        window.gtag('event', event, {
          page_location: window.location.href,
          page_title: document.title,
        });
      }

      // Track in Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'CustomEvent', { event_name: event });
      }

      // Track in Google Tag Manager
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'custom_event',
          event_category: 'engagement',
          event_label: event,
        });
      }
    } catch (error) {
      console.error("Analytics tracking failed:", error);
    }
  }, []);

  const trackConversion = useCallback(async (conversionType: 'call' | 'whatsapp' | 'form') => {
    try {
      await trackEvent(`conversion_${conversionType}`);
      
      // Track conversion in Google Ads
      if (window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL', // TODO: Replace with actual conversion tracking
          value: 1.0,
          currency: 'INR',
        });
      }

      // Track conversion in Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead', { 
          content_category: 'AC Service',
          content_name: conversionType 
        });
      }
    } catch (error) {
      console.error("Conversion tracking failed:", error);
    }
  }, [trackEvent]);

  return {
    trackEvent,
    trackConversion,
  };
}
