import React, { useState, useEffect } from 'react';
import { Textarea } from "@material-tailwind/react";


function Interview() {
  const [time, setTime] = useState({
    sec: 0,
    min: 0,
    hr: 0
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prevTime) => {
        let newTime = { ...prevTime };

        if (newTime.sec < 59) {
          newTime.sec += 1;
        } else {
          newTime.sec = 0;

          if (newTime.min < 59) {
            newTime.min += 1;
          } else {
            newTime.min = 0;
            newTime.hr += 1;
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
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
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj mb-3"> Num# question (Programming)</h1>

      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-4xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj mb-3 underline">(question ?)</h1>

      <div className="flex flex-col items-center w-[32rem] mx-auto">
        <Textarea variant="static" placeholder="Your Answer..." rows={8} />
        <div className="flex w-full justify-between py-1.5">
          <div className="flex gap-2">
          </div>
        </div>
      </div>

      <div className="mb-3">
  <button 
    className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5"
  >
    Next
  </button>
</div>
  



<button class="cursor-pointer font-semibold overflow-hidden relative z-100  group px-8 py-2">
<button 
    onClick={reset} 
    className="rounded-full bg-[#e7e8e8] text-black p-3 text-lg cursor-pointer outline-none border border-solid border-[#2E3837]"
    style={{ backgroundColor: 'transparent' }}
  >
    {`${time.hr < 10 ? '0' : ''}${time.hr} : ${time.min < 10 ? '0' : ''}${time.min} : ${time.sec < 10 ? '0' : ''}${time.sec}`}
  </button>

</button>



    </>
  );
}

export default Interview;

