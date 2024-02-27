import React, { useState } from 'react';
import { Textarea } from "@material-tailwind/react";

function HomeAnswer() {
  const [showTextarea, setShowTextarea] = useState(null);

  const questions = [
    { index: 1, text: "Question", icon: "/src/assets/click (1).png" },
    { index: 2, text: "User Answer", icon: "/src/assets/click (1).png" },
    { index: 3, text: "Ai Answer", icon: "/src/assets/click (1).png" },
  ];

  const handleButtonClick = (index) => {
    setShowTextarea(index === showTextarea ? null : index);
  };

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <img src="/src/assets/return.png" className="mr-3 h-6 sm:h-6" alt="" />
          </div>
        </nav>
      </header>

      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-4xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj mb-3 underline">HomeAnswer</h1>

      <div className="flex items-center justify-center w-[32rem] mx-auto space-x-4">
        {questions.map(({ index, text, icon }) => (
          <button
            key={index}
            className="flex items-center justify-center w-32 bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5 mx-1"
            onClick={() => handleButtonClick(index)}
          >
            {text}
            <img src={icon} alt={`Your Icon ${index}`} className="w-4 h-4 inline-block ml-2" />
          </button>
        ))}
      </div>

      {showTextarea !== null && (
        <div className="flex flex-col items-center w-[32rem] mx-auto">
          <Textarea variant="static" placeholder={` ${questions.find(q => q.index === showTextarea).text} :`} rows={8} />
          <div className="flex w-full justify-between py-1.5">
            <div className="flex gap-2"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default HomeAnswer;


