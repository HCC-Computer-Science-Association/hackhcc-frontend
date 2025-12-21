"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Who can participate?",
      answer:
        "Anyone! Whether you're a student, professional, or hobbyist - if you're passionate about tech and innovation, you're welcome. Teams can have up to 4 members.",
    },
    {
      question: "What should I bring?",
      answer:
        "Bring your laptop, chargers, toiletries, and enthusiasm! We'll provide food, drinks, workspace, and WiFi. Don't forget a issued ID for check-in.",
    },
    {
      question: "Do I need a team?",
      answer:
        "Nope! You can come solo and find a team at our team formation session, or participate individually. We also welcome pre-formed teams.",
    },
    {
      question: "Is there a cost to attend?",
      answer:
        "HACKHCC: CODERUNNERS is completely FREE! This includes access to all workshops, meals, swag, and the chance to win amazing prizes.",
    },
    {
      question: "What can I build?",
      answer:
        "Anything! Apps, websites, hardware projects, games, AI models - as long as you create it during the hackathon. We have special tracks for it.",
    },
    {
      question: "Are there travel reimbursements?",
      answer:
        "No! We don't offer travel reimbursements for participants.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-dark-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-10 h-10 text-cyber-magenta" />
            <h2>
              <span className="neon-text-magenta">FAQ</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-cyber-magenta to-cyber-cyan mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-2 border-white/20 bg-dark-navy/80 backdrop-blur-sm hover:border-cyber-cyan transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <h4 className="text-white">{faq.question}</h4>
                <ChevronDown
                  className={`w-5 h-5 text-cyber-cyan transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-4 text-white/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/70 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@hackhcc.com?subject=Contact%20HackHCC"
            className="inline-flex cursor-pointer px-6 py-3 neon-border-yellow hover:bg-neon-yellow/10 transition-all duration-300"
          >
            <span className="neon-text-yellow">Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
