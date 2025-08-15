import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    id: "cost",
    question: "What is the cost of AC repair in Dahisar?",
    answer: "AC repair costs start from ₹499 depending on the issue. Common repairs like gas filling cost ₹1,500-2,500, compressor issues ₹3,000-8,000, and filter cleaning is ₹299. We provide transparent pricing before starting any work.",
  },
  {
    id: "speed",
    question: "How quickly can you provide same-day AC service?",
    answer: "We provide same-day service within 2-4 hours for emergency repairs in Dahisar, Borivali, Mira Road, Kandivali, and Malad. For non-emergency services, we can schedule within 24 hours at your preferred time.",
  },
  {
    id: "warranty",
    question: "Do you provide warranty on AC repairs?",
    answer: "Yes, we provide 30-day warranty on all repair work and 90-day warranty on parts replacement. For new AC installations, we offer 1-year comprehensive warranty covering parts and labor.",
  },
  {
    id: "brands",
    question: "Which AC brands do you service in Mumbai?",
    answer: "We service all major AC brands including LG, Samsung, Voltas, Godrej, Hitachi, Daikin, Blue Star, Carrier, O General, and more. Our technicians are trained to handle split, window, and commercial AC units.",
  },
  {
    id: "payment",
    question: "What payment modes do you accept?",
    answer: "We accept cash, UPI (Google Pay, PhonePe, Paytm), bank transfer, and card payments. Payment is due after service completion. We also offer EMI options for AC installations and major repairs above ₹10,000.",
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
