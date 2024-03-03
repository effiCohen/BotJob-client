import React, { useState, useEffect } from 'react';


function InterviewDone() {

  return (
    <>

      <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl md:mb-12 my-3 m-3">
        <h2 className="max-w-lg  font-[Inter] text-lg font-bold leading-none text-gray-900 sm:text-xl md:mx-auto">
          Congratulations on Completing Your Interview!
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          You have successfully completed the interview!
        </p>
        <p className="text-center text-[#4A5568] font-bold">Time Taken: X minutes</p>
        <p className="text-center text-[#4A5568] font-bold">Score: Y</p>
        <div className='mx-auto flex justify-center items-center  my-3'>
          <button className="block lg:w-40 w-[95%]  bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837]  text-white rounded-2xl px-3 py-3 font-bold font-[simple] ">To All Ans</button>
        </div>
        <div className="hidden md:block w-full lg:flex justify-center mx-auto items-center ">
          <div className="w-full max-w-xl  justify-center items-center">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 place-items-center mt-3 ">
              <div className="p-8 text-center bg-white rounded-xl shadow place-items-center  ">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-indigo-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800">
                  Work Harder
                </p>
              </div>
              <div className="p-8 text-center bg-white rounded-xl shadow place-items-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-indigo-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
                <p className="font-bold tracking-wide text-gray-800">
                  Do it Faster
                </p>
              </div>
              <div className="p-8 text-center bg-white rounded-xl shadow place-items-center">
                <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50">
                  <svg
                    className="w-10 h-10 text-indigo-500"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
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