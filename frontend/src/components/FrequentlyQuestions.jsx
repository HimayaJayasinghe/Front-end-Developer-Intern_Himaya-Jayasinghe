import React, { useState } from 'react';

const FrequentlyQuestions = () => {
  const [openQuestion, setOpenQuestion] = useState(0);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    }
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center py-16 px-8 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-[27px] font-bold text-[#4F46E5] text-center mb-8">
          Frequently asked questions
        </h2>
        
        <div className="w-full">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <div 
                className="bg-[#f8f7ff] p-6 rounded-md cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">{faq.question}</h3>
                  <span className="text-[22px] text-[#4F46E5]">
                    {openQuestion === index ? "−" : "+"}
                  </span>
                </div>
                
                {openQuestion === index && (
                  <div className="mt-2 text-gray-600 text-[18px]">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentlyQuestions;
