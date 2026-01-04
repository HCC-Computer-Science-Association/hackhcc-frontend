"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is a hackathon?",
      answer:
        "A hackathon is a 24-hour competition where you and up to 3 teammates build a software project from scratch and compete against other groups for prizes. Sponsors will also provide workshops, events, and activities throughout the weekend to help you learn more about the field of technology!",
    },
    {
      question: "Who can participate?",
      answer:
        "Everyone is welcome to come, and no experience is necessary to attend! We will even be hosting workshops to introduce new hackers to industry programs and technologies.",
    },
    {
      question: "What should I bring?",
      answer:
        "You just need to bring a laptop, charger, and a hacking spirit to participate! We also recommend having a compiler, packages, or any packaging tools ready beforehand. We will be providing internet connectivity, and will also have free food throughout the event!",
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
        "Anything! Apps, websites, hardware projects, games, AI models, as long as you create it during the hackathon. We have special tracks for it.",
    },
    {
      question: "Are there travel reimbursements?",
      answer: "No, we don't offer travel reimbursements for participants.",
    },
  ];

  return (
    <>
      <div className="bg-[initial] bg-[url('../img/separator-yellow-f58e9aba.svg')]   w-full z-1">
        hackerpsycho
      </div>
      <section id="faq" className="py-20 px-4 bg-cp-yellow">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="w-10 h-10 text-dark-navy" />
              <h2>
                <span className="text-dark-navy">FAQ</span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-magenta to-cyber-cyan mx-auto"></div>
          </div>

          <div className="space-y-4 bg-dark-navy p-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 border-white/20 bg-dark-navy/80 backdrop-blur-sm hover:border-cyber-cyan transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
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
            <p className="text-dark-navy/70 mb-4">Still have questions?</p>
            <a
              href="mailto:officialhackhcc@gmail.com?subject=Contact%20HackHCC"
              className="inline-flex cursor-pointer px-6 py-3 bg-dark-bg "
            >
              <span className="text-cp-yellow">Contact Us</span>
            </a>
          </div>
        </div>
      </section>
      <div className="bg-cp-yellow bg-[url('../img/razor-099e4b40.svg')]  bg-[length:auto_45px] bg-[right_bottom] bg-repeat-x rotate-180 py-2 px-[50px] -translate-y-[2px]">
        Elmo
      </div>
    </>
  );
}
