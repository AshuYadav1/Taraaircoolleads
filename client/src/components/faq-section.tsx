import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    id: "cost",
    question: "How much does AC repair cost in Dahisar?",
    answer: "AC repair in Dahisar starts from ₹499. The cost depends on the type of repair needed, AC brand, and parts required. We provide transparent pricing with no hidden charges.",
  },
  {
    id: "speed",
    question: "Do you provide same-day AC service in Borivali?",
    answer: "Yes, we provide same-day AC service in Borivali for most repairs. Emergency services are available 24/7 with response within 30 minutes.",
  },
  {
    id: "brands",
    question: "What brands of AC do you repair?",
    answer: "We repair all major AC brands including Voltas, Blue Star, Carrier, Daikin, Hitachi, Samsung, LG, Panasonic, and more. Our technicians are certified for multiple brands.",
  },
  {
    id: "gas-filling",
    question: "How long does AC gas filling take?",
    answer: "AC gas filling typically takes 1-2 hours depending on the AC size and gas type. We also check for leaks and ensure optimal performance.",
  },
  {
    id: "warranty",
    question: "Do you provide warranty on AC repairs?",
    answer: "Yes, we provide 90-day warranty on all AC repairs and 1-year warranty on parts. Our service includes follow-up support to ensure customer satisfaction.",
  },
  {
    id: "areas",
    question: "What areas do you serve in Mumbai?",
    answer: "We serve Mumbai Western Suburbs including Dahisar, Borivali, Mira Road, Kandivali, Malad, Andheri, and surrounding areas. Call us to confirm service availability.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions - AC Repair in Mumbai</h2>
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
