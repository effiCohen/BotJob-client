import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { API_URL, doApiGet } from '../services/apiService';
import { useNavigate } from 'react-router-dom';

function HomeAnswer() {
  let nav = useNavigate();
  let [thisData, setThisData] = useState({});
  const ThisQuestion = useSelector(state => state.intervewSlice.ThisQuestion);
  const buttons = [
    { text: "Question", tipe: "question" },
    { text: "User Answer", tipe: "userAnswer" },
    { text: "Ai Answer", tipe: "aiAnswer" }
  ];
  const [showText, setShowText] = useState();

  useEffect(() => {
    doApi()
  }, [])

  const doApi = async () => {
    let url = API_URL + "/questions/" + ThisQuestion;
    try {
      let resData = await doApiGet(url);
      setThisData(resData.data);
      setShowText(resData.data.question);
    } catch (error) {
      console.log(error);
      nav("/history");
    }
  }

  const onAnswerClick = (index) => {
    setShowText(thisData[buttons[index].tipe])
  };
  const BackToQuestions = () => {
    nav("/homeQushtions");
  };

  return (
    <>
      <div className=" border-gray-200 px-4 mt-3 lg:px-6 py-2.5 dark:bg-gray-800">
      <img onClick={() => BackToQuestions()} src="/src/assets/left-arrow.png" className="mr-3 h-6 sm:h-6" style={{  marginLeft: '10px' ,height:'30px' }} alt="" />

        <div className="flex  justify-center  items-center mx-auto max-w-screen-sm">
          <h1 className=" font-bold  text-gray-900 sm:text-3xl   lg:text-2xl font-[Inter] mb-3 ">Learn from answers</h1>
          <div></div>
        </div>
      </div>

      <div className="flex items-center justify-between flex-col lg:flex-row w-[32rem] mx-auto space-x-4">
        {buttons.map((item, index) => (
          <button onClick={() => onAnswerClick(index)} key={index} className="bg-[#ffafcc] w-[50%] lg:w-[35%] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-700 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#3871C1] before:to-[#000000] before:transition-all before:duration-700 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#ffffff] hover:text-[#ebf7ff]">
            <span className="">{buttons[index].text}</span>
            <img src="/src/assets/click (1).png" alt="Your Icon" className="w-4 h-4  ml-2 absolute right-2 lg:right-1 lg:flex-none hidden lg:block" />
          </button>
        ))}
      </div>
      <div className='w-full'>
        {showText !== null ? (
          <div className="flex flex-col items-center w-[32rem] mx-auto shadow-md rounded-lg p-4 m-5">
            <p className='font-[Inter]'>{showText}</p>
            <div className="flex w-full justify-between py-1.5">
              <div className="flex gap-2"></div>
            </div>
          </div>
        ) : "There is no user response"}
      </div>

    </>
  );
}

export default HomeAnswer;


