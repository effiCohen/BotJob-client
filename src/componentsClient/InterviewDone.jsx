import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { addThisIntervews } from '../featuers/intervewSlice';
// import Lottie from 'react-lottie';
// import lottieJson from '../assets/Animation - 1711400576493.json'


function InterviewDone() {
  let nav = useNavigate();
  const dispatch = useDispatch();
  const [time, setTime] = useState({});
  const finalTime = useSelector(state => state.newIntervewSlice.time);
  const intervew = useSelector(state => state.newIntervewSlice.newIntervew);


  useEffect(() => {
    setTime(finalTime);
  }, []);

  const toAllAnsClick = () => {
    dispatch(addThisIntervews({ ThisInterview: intervew._id }));
    nav("/homeQushtions");
  }


  return (
    <>
      <div className="max-w-xl md:mx-auto flex justify-between flex-col mt-3 sm:text-center lg:max-w-2xl md:mb-12 my-6 m-3 ">
        <h2 className="max-w-lg  m-2 font-[Inter] text-lg font-bold leading-none text-gray-900 sm:text-3xl md:mx-auto">
          Congratulations on completing your interview!
        </h2>
        <p className="font-[Inter] m-2 text-gray-700 md:text-lg">
          You successfully completed the interview!
        </p>
        <p className="text-center font-[Inter] text-[#4A5568] font-bold m-2">Time taken
          {` ${time.hr < 10 ? '0' : ' '}${time.hr} : ${time.min < 10 ? '0' : ''}${time.min} : ${time.sec < 10 ? '0' : ''}${time.sec}`}
        </p>
        <div className='mx-auto flex justify-center items-center  my-4'>
          <button onClick={toAllAnsClick} className=" mt-10 block lg:w-40 w-[95%]  bg-[#ffafcc] hover:bg-[#FAF7FF] hover:text-[#2E3837]  text-white rounded-2xl px-3 py-3 font-bold font-[simple] ">To all answers</button>

        </div>
        <div className=" mt-5 hidden md:block w-full lg:flex justify-center mx-auto items-center ">
          <div className="w-full max-w-xl  justify-center items-center">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 place-items-center mt-3 ">
              <div className="p-8 text-center bg-white rounded-xl shadow place-items-center  ">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-indigo-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23" />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800">
                  Work harder
                </p>
              </div>
              <div className="p-8 text-center bg-white rounded-xl shadow place-items-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-indigo-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23" />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800">
                  Do it faster
                </p>
              </div>
              <div className="p-8 text-center bg-white rounded-xl shadow place-items-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-indigo-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52">
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23" />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800">
                  Make it better
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default InterviewDone;