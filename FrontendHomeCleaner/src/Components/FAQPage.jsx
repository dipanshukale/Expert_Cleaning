import React, { useState } from "react";

const faqs = [
  {
    question: "What is your cleaning service availability?",
    answer:
      "We provide cleaning services seven days a week, including holidays, to ensure our clients are always satisfied.",
  },
  {
    question: "Are the cleaning products safe for kids and pets?",
    answer:
      "Yes, we use eco-friendly and non-toxic cleaning products that are safe for kids and pets.",
  },
  {
    question: "Do you provide customizable cleaning packages?",
    answer:
      "Absolutely! We offer customizable cleaning packages tailored to meet your specific needs and preferences.",
  },
  {
    question: "How do I book your cleaning service?",
    answer:
      "You can book our services online through our website or contact our customer support team directly.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, UPI, and online payment methods for your convenience.",
  },
];

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-100 min-h-screen py-12 px-6 md:px-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-4 tracking-widest">Have Questions?</h1>
        <p className="text-gray-700 text-sm md:text-base italic">
          We’ve got answers to all your frequently asked questions. If you have
          more queries, feel free to contact us!
        </p>  
      </div>

      <div className="flex justify-center">
        <div className="space-y-4 w-full max-w-xl">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-lg bg-white shadow-md p-8 min-h-[100px]  transition-all duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-serif text-gray-800 ">
                  {faq.question}
                </h3>
                <button
                  className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300"
                  title={activeIndex === index ? "Collapse" : "Expand"}
                >
                  {activeIndex === index ? "-" : "+"}
                </button>
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-600 text-sm md:text-base">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQPage;
