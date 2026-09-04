"use client";

import { useState } from "react";

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const faqs = [
  {
    question: "How does the 'Polish Prompt' feature work?",
    answer: "When you click 'Polish Prompt', your draft is sent securely to our underlying intelligence layer (Groq's LLaMa 3.3). It analyzes your intent and rewrites the command using prompt-engineering best practices to get you the most accurate response possible.",
  },
  {
    question: "Are my conversations private?",
    answer: "Yes. All conversations belong exclusively to your workspace and are secured via Row-Level Security in your database. No other users can read your threads.",
  },
  {
    question: "What is Rahul Pro?",
    answer: "Rahul Pro is our upcoming subscription tier that unlocks ultra-low latency streams, increased context length for massive coding projects, and priority access to specialized analytical streams.",
  },
];

export default function FAQModal({ isOpen, onClose }: FAQModalProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center fade-in-up">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-inverse-surface/20 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-[500px] bg-surface-container-lowest rounded-[2rem] shadow-[0_20px_40px_rgba(25,28,30,0.1)] border border-outline-variant/10 overflow-hidden m-4 flex flex-col">
        {/* Header */}
        <div className="px-8 pt-8 pb-5 flex items-center justify-between border-b border-outline-variant/10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">
              help
            </span>
            <h2 className="font-headline text-xl font-extrabold text-on-surface">
              Help Center & FAQ
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-surface-container-low hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-on-surface-variant text-sm">
              close
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3 overflow-y-auto max-h-[60vh] chat-scroll">
          {faqs.map((faq, index) => {
            const isExpanded = openIndex === index;
            return (
              <div 
                key={index}
                className={`border border-outline-variant/10 rounded-2xl transition-all cursor-pointer ${
                  isExpanded ? "bg-surface-container-low" : "hover:bg-surface"
                }`}
                onClick={() => setOpenIndex(isExpanded ? null : index)}
              >
                <div className="p-5 flex items-center justify-between">
                  <h3 className={`text-sm font-bold ${isExpanded ? "text-primary" : "text-on-surface"}`}>
                    {faq.question}
                  </h3>
                  <span className={`material-symbols-outlined text-on-surface-variant transition-transform ${isExpanded ? "rotate-180 text-primary" : ""}`}>
                    expand_more
                  </span>
                </div>
                {isExpanded && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-[13px] text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
