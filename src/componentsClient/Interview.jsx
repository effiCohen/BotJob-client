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
  }, []);

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
        console.log("The answer was successfully received");
      } else {
        console.log("The answer has not been added");
      }
    }
    catch (err) {
      console.log(err.response.data);
    }
  }

  const doApiTime = async () => {
    let stringTime = time.hr.toString() + ":" + time.min.toString() + ":" + time.sec.toString();
    let url = API_URL + "/interviews/" + myInterview._id;
    let _dataBody = {
      Time: stringTime
    }
    try {
      let resp = await doApiMethod(url, "PUT", _dataBody);
      if (resp.data.modifiedCount == 1) {
        console.log("The answer was update");
      } else {
        console.log("The answer was not update");
      }
    }
    catch (err) {
      console.log(err.response.data);
    }
  }

  const onNextClick = () => {
    doApiAnswer(answer)
    if (cuonter < myInterview.questions.length) {
      doApi()
      setAnswer("")
    } else {
      doApiTime();
      dispatch(addTime({ time: time }));
      nav("/InterviewDone");
    }
  }
  const handleChange = (event) => {
    setAnswer(event.target.value)
  }

  return (
    <>

      <h2 className='font-bold font-[Inter] text-black text-3xl mt-9 '>{question.question}? </h2>
      <div className="flex flex-col items-center w-[32rem] mx-auto shadow-md rounded-lg p-4 m-5 mt-14">
        <Textarea value={answer} onChange={handleChange} variant="static" placeholder="Your Answer..." rows={8} />
        <div className="flex w-full justify-between ">
          <div className="flex gap-2">
          </div>
        </div>
      </div>
      <div className="mb-3">{cuonter < myInterview.questions.length ?
        <button onClick={onNextClick} className="block w-[90%] max-w-xs mx-auto bg-[#ffafcc] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[Inter] mt-5">Next question</button> :
        <button onClick={onNextClick} className="block w-[90%] max-w-xs mx-auto bg-[#ffafcc] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[Inter] mt-5">Finish</button>}
      </div>

      <div className="cursor-pointer font-semibold overflow-hidden relative z-100 group px-8 py-2">
        <button
          className="rounded-full p-3 text-lg cursor-pointer outline-none border border-solid"
        >
          {`${time.hr < 10 ? '0' : ''}${time.hr} : ${time.min < 10 ? '0' : ''}${time.min} : ${time.sec < 10 ? '0' : ''}${time.sec}`}
        </button>
      </div>

    </>
  );
}

export default Interview;