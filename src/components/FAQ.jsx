import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

const FAQ = () => {
  const faqs = [
    {
      question: 'Are the products safe?',
      answer: 'Yes. All BloomHerCare products are dermatologically tested, free from harsh chemicals, and designed specifically for sensitive, growing skin.'
    },
    {
      question: 'How do I choose the right size?',
      answer: 'We have a comprehensive size guide on our product pages. For period panties, we recommend taking hip measurements to ensure a secure, leak-proof fit.'
    },
    {
      question: 'How often should period panties be replaced?',
      answer: 'With proper care (machine wash cold, hang dry), they can last up to 2 years while maintaining their absorbency and shape.'
    },
    {
      question: 'What age are these products designed for?',
      answer: 'Our core line is designed for preteens and teens ages 8-16, but our products work wonderfully for anyone looking for gentle, reliable period care.'
    },
    {
      question: 'How does the subscription work?',
      answer: 'You choose your products, absorbency levels, and delivery frequency. You can pause, modify, or cancel your subscription at any time through your account dashboard.'
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="text-center" style={{ fontSize: '3rem', marginBottom: '3rem' }}>
          Frequently Asked <span className="gradient-text">Questions</span>
        </h2>
        
        <div className="faq-container">
          {faqs.map((faq, idx) => (
            <div key={idx} className={`faq-item ${openIndex === idx ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFaq(idx)}>
                <span>{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
