import React from 'react'
import { Textarea } from "@material-tailwind/react";
import { Rating, Typography } from "@material-tailwind/react";


function Feedback() {
    const [rated, setRated] = React.useState(4);

    return (
<>
  <style>
    {`
      body {
        font-size: 90%;
      }



      .text-left {
        font-size: 90%;
      }

      .w-[22rem], .w-[32rem] {
        width: 20%;
      }
    `}
  </style>

  <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj mb-3">You have finished your interview</h1>
  <h2 className="text-left text-2xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-2xl font-pj mb-3 underline">your average
  <div className="flex items-center gap-2 font-bold text-blue-gray-500">
      {rated}.7
      <Rating value={4} onChange={(value) => setRated(value)} />
      <Typography color="blue-gray" className="font-medium text-blue-gray-500">
      </Typography>
    </div>
    </h2>  
  <h2 className="text-left text-2xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-2xl font-pj mb-3">In this interview you answered #% correctly.</h2>
  <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">More... </button>

  <h2 className="text-left text-2xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-2xl font-pj mb-2 underline"> Your feedback</h2>
  <h2 className="text-left text-2xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-2xl font-pj mb-2">If you have something to say feel free to send us a message</h2>

  <div className="flex flex-col items-center w-[22rem] mx-auto">
  <Textarea variant="static" placeholder="Your Answer..." rows={5} style={{ height: '90%' }} />
  <div className="flex w-full justify-between py-1.5">
    <div className="flex gap-2">
    </div>
  </div>
</div>


  <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">Send </button>
</>

        )
  }
  
  export default Feedback