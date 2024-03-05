import React, { useState } from 'react';

function QuestionAdmin() {
  const [showText, setShowText] = useState("text");

  const buttons = [
    { text: "Question", tipe: "question" },
    { text: "User Answer", tipe: "aiAnswer" },
    { text: "Ai Answer", tipe: "userAnswer" }
  ];

  const onAnswerClick = (index) => {
    console.log(buttons[index].tipe);
    // setShowText(buttons[index].tipe);
  };
  return ( 
<> 
<header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        
            <img src="/src/assets/return.png" className="mr-3 h-6 sm:h-6" alt="" />
            <img src="/src/assets/home.png" className="mr-3 h-6 sm:h-6" alt="" />
               
            </div>
           
    </nav>
</header>


<h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj"> Interview (Role) On Number *Num* </h1>
<div className="flex items-center justify-center w-[32rem] mx-auto space-x-4">
        {buttons.map((item, index) => (
          <button onClick={onAnswerClick(index)} key={index} className="bg-black w-full lg:w-[35%] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FFFDFB] before:to-[#FBF9F3] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#FBF9F3] hover:text-[#2E3837]">
            <span className="">{buttons[index].text}</span>
            <img src="/src/assets/click (1).png" alt="Your Icon" className="w-4 h-4  ml-2 absolute right-2 lg:right-1 lg:flex-none hidden lg:block" />
          </button>
        ))}
      </div>
      {showText !== null && (
        <div className="flex flex-col items-center w-[32rem] mx-auto">
          <p>{showText}</p>
          <div className="flex w-full justify-between py-1.5">
            <div className="flex gap-2"></div>
          </div>
        </div>
      )}
  </>  
    )
}

export default QuestionAdmin