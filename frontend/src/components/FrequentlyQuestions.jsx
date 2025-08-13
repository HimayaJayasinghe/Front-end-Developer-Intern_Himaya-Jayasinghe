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
    <div className="w-full flex flex-col justify-center items-center py-16 lg:py-12 px-8 bg-white">
      <div className="container mx-auto max-w-3xl lg:max-w-2xl">
        <h2 className="text-[27px] lg:text-[24px] font-bold text-[#4F46E5] text-center mb-8 lg:mb-6">
          Frequently asked questions
        </h2>
        
        <div className="w-full">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4">
              <div 
                className="bg-[#f8f7ff] p-6 lg:p-5 rounded-md cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-800 lg:text-[15px]">{faq.question}</h3>
                  <span className="text-[22px] lg:text-[20px] text-[#4F46E5]">
                    {openQuestion === index ? "−" : "+"}
                  </span>
                </div>
                
                {openQuestion === index && (
                  <div className="mt-2 text-gray-600 text-[18px] lg:text-[15px]">
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
