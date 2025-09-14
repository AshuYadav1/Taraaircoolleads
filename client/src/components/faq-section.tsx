import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    id: "cost",
    question: "What is the cost of AC repair in Dahisar, Mumbai?",
    answer: "Emergency AC repair costs ₹499. Emergency AC gas filling costs ₹1,500, compressor repair ₹3,500-8,000, PCB repair ₹2,500, and filter cleaning ₹299. We provide upfront transparent pricing with no hidden charges.",
  },
  {
    id: "speed",
    question: "How quickly can you provide same-day AC service in Mumbai Western Suburbs?",
    answer: "We provide same-day emergency AC repair within 2-4 hours in Dahisar, Borivali, Mira Road, Kandivali, and Malad. Call +91-97025-25317 for immediate service. Non-emergency services can be scheduled within 24 hours.",
  },
  {
    id: "emergency",
    question: "Do you provide 24x7 emergency AC repair in Dahisar?",
    answer: "Yes, we provide emergency AC repair services 9 AM to 9 PM, 7 days a week. For urgent cooling issues during Mumbai's hot weather, we guarantee same-day service with our mobile AC repair van.",
  },
  {
    id: "warranty",
    question: "What warranty do you provide on AC repairs and installation?",
    answer: "We provide 30-day warranty on all AC repair work, 90-day warranty on parts replacement, and 1-year comprehensive warranty on new AC installations. All work is covered against defects in workmanship.",
  },
  {
    id: "brands",
    question: "Which AC brands do you service in Mumbai? (LG, Samsung, Voltas)",
    answer: "We service all major AC brands: LG, Samsung, Voltas, Godrej, Hitachi, Daikin, Blue Star, Carrier, O General, Mitsubishi, Panasonic, and Whirlpool. Our certified technicians handle split, window, cassette, and VRV AC systems.",
  },
  {
    id: "gas-filling",
    question: "How much does AC gas filling cost in Dahisar? Is it safe?",
    answer: "Emergency AC gas filling costs ₹1,500 for all AC types and gas variants (R22, R32, R410A). We use nitrogen pressure testing to detect leaks and ensure safety. Includes gas leak detection and system performance check.",
  },
  {
    id: "installation",
    question: "What is included in AC installation service in Mumbai?",
    answer: "AC installation (₹1,999) includes wall mounting, copper piping (up to 3 meters), electrical connections, drainage setup, gas charging, and testing. Additional piping costs ₹85/foot. We handle all brands with proper mounting brackets.",
  },
  {
    id: "payment",
    question: "What payment modes do you accept? Can I pay after service?",
    answer: "Yes, payment is due only after service completion. We accept cash, UPI (Google Pay, PhonePe, Paytm), bank transfer, and card payments. EMI options available for AC installations and repairs above ₹10,000.",
  },
  {
    id: "festival-offer",
    question: "Do you have any special offers for AC service during festival season?",
    answer: "Yes! Festival season offer: Emergency AC repair starting ₹499, FREE filter cleaning with AMC booking, and 15% discount on annual maintenance contracts. Limited time festive offer!",
  },
  {
    id: "amc",
    question: "What is included in Annual AC Maintenance Contract (AMC)?",
    answer: "Annual AMC (₹2,499) includes 4 scheduled visits, deep cleaning, filter replacement, electrical check, performance optimization, and priority emergency service. Saves money on repairs and maintenance.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Get answers to common AC service questions</p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="border border-gray-200 rounded-lg">
              <AccordionTrigger 
                className="text-left p-6 hover:no-underline"
                data-testid={`faq-trigger-${faq.id}`}
              >
                <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent 
                className="px-6 pb-6 text-gray-600"
                data-testid={`faq-content-${faq.id}`}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
