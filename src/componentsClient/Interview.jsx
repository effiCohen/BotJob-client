import React, { useState, useEffect } from 'react';
import { Textarea } from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import ItemAnswer from './itemAnswer';


function Interview() {
  const newIntervew = useSelector(state => state.newIntervewSlics.newIntervew);
  const [time, setTime] = useState({ sec: 0, min: 0, hr: 0 });
  const [counter, setCounter] = useState(0);


  useEffect(() => {
    console.log(newIntervew);
    // const intervalId = setInterval(() => {
    //   setTime((prevTime) => {
    //     let newTime = { ...prevTime };
    //     if (newTime.sec < 59) {
    //       newTime.sec += 1;
    //     } else {
    //       newTime.sec = 0;

    //       if (newTime.min < 59) {
    //         newTime.min += 1;
    //       } else {
    //         newTime.min = 0;
    //         newTime.hr += 1;
    //       }
    //     }
    //     return newTime;
    //   });
    // }, 1000);
    // return () => clearInterval(intervalId);
  }, []);

  const reset = () => {
    setTime({
      sec: 0,
      min: 0,
      hr: 0
    });
  };

  return (
    <>
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj mb-3">Question {counter + 1} of </h1>
      {/* {newIntervew.questions.length} */}
      <ItemAnswer index={counter} item={newIntervew.questions[counter]} />
      <button className="cursor-pointer font-semibold overflow-hidden relative z-100  group px-8 py-2">
        <div
          onClick={reset}
          className="rounded-full bg-[#e7e8e8] text-black p-3 text-lg cursor-pointer outline-none border border-solid border-[#2E3837]"
          style={{ backgroundColor: 'transparent' }}
        >
          {`${time.hr < 10 ? '0' : ''}${time.hr} : ${time.min < 10 ? '0' : ''}${time.min} : ${time.sec < 10 ? '0' : ''}${time.sec}`}
        </div>
      </button>
    </>
  );
}

export default Interview;

