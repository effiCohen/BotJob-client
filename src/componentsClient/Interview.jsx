import React, { useState, useEffect } from 'react';
import { Textarea } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiGet, doApiMethod } from '../services/apiService';
import { addTime } from '../featuers/newIntervewSlice';

function Interview() {
  let nav = useNavigate();
  const dispatch = useDispatch();
  const myInterview = useSelector(state => state.newIntervewSlice.newIntervew);
  const [answer, setAnswer] = useState("");
  let arQuestions = myInterview.questions;
  const [cuonter, setcuonter] = useState(0);
  const [question, setQuestion] = useState({ question: "test" });
  const [time, setTime] = useState({ sec: 0, min: 0, hr: 0 });
  const [timeLimit, setTimeLimit] = useState(1);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    console.log(myInterview.questions);
    doApi(myInterview)
    test()
  },[]);

  const test = () => {
  const intervalId = setInterval(() => {
    setTime((prevTime) => {
      let newTime = { ...prevTime };
      if (newTime.sec < 59) { newTime.sec += 1; }
      else {
        newTime.sec = 0;
        if (newTime.min < 59) { newTime.min += 1; }
        else { newTime.min = 0; newTime.hr += 1; }
      }
      if (newTime.sec === 0 && newTime.min % timeLimit === 0) {
        alert("Don't give up, keep answering");
      }
      if (newTime.min >= timeLimit) {
        setIsTimeUp(true);
      }
      return newTime;
    });
  }, 1000);
  return () => clearInterval(intervalId);
}

  const doApi = async () => {
    let url = API_URL + "/questions/" + arQuestions[cuonter];
    try {
      let resp = await doApiGet(url);
      setQuestion(resp.data);
      let cuont = cuonter;
      setcuonter(cuont += 1)
    }
    catch (err) {
      console.log(err.response.data);
    }
  }

  const doApiAnswer = async (_answer) => {
    let _dataBody = {
      userAnswer: answer
    }
    let url = API_URL + "/questions/" + arQuestions[cuonter - 1];
    try {
      let resp = await doApiMethod(url, "PUT", _dataBody);
      if (resp.data.modifiedCount == 1) {
        console.log("Answer successfully added");
      } else {
        console.log("The answer has not been added");
      }
    }
    catch (err) {
      console.log(err.response.data);
    }
  }

  const onNextClick = () => {
    doApiAnswer(answer)
    console.log(cuonter);
    console.log(myInterview.questions.length);
    if (cuonter < myInterview.questions.length) {
      doApi()
      setAnswer("")
    } else {
      dispatch(addTime({ time: time }));
      nav("/InterviewDone");
    }
  }
  const handleChange = (event) => {
    setAnswer(event.target.value)
  }

  return (
    <>
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj mb-3">question</h1>
      <p>{question.question}</p>
      <div className="flex flex-col items-center w-[32rem] mx-auto">
        <Textarea value={answer} onChange={handleChange} variant="static" placeholder="Your Answer..." rows={8} />
        <div className="flex w-full justify-between py-1.5">
          <div className="flex gap-2">
          </div>
        </div>
      </div>
      <div className="mb-3">{cuonter < myInterview.questions.length ?
        <button onClick={onNextClick} className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5">Next</button> :
        <button onClick={onNextClick} className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5">finish</button>}
      </div>

      <div className="cursor-pointer font-semibold overflow-hidden relative z-100 group px-8 py-2">
        <button
          className="rounded-full p-3 text-lg cursor-pointer outline-none border border-solid"
          style={{backgroundColor: time.min >= 1 ? '#e74c3c' : '#e7e8e8',color: time.min >= 2 ? '#ffffff' : '#000000',}}>
          {`${time.hr < 10 ? '0' : ''}${time.hr} : ${time.min < 10 ? '0' : ''}${time.min} : ${time.sec < 10 ? '0' : ''}${time.sec}`}
        </button>
      </div>
      {isTimeUp && (
        <div className="text-red-500 mt-2 text-center font-bold">
         Time has passed friend!
        </div>
      )}
    </>
  );
}

export default Interview;
