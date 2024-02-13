import React from 'react'

function ValidationClient() {
  return (
    <>
      <h1 className="text-center text-[50px] font-sans bg-[#FFFDFB]"> Email Confirm </h1>

      <div className=" lg:flex-row-reverse flex min-h-screen flex-col items-center justify-center overflow-hidden  bg-[#FFFDFB] ">

        <figure className='max-w-lg  '>
          <img src="/src/assets/Asset@2x-8 1.png" alt="email@ " className='h-auto w-[100%] max-w-lg' />
        </figure>
        <div className="max-w-xl px-5 text-center flex flex-col justify-start items-center mb-20  ">
          <h1 className='font-bolt font-[Poppins] text-[42px]'>Hi! Sharon</h1>
          <h4 className=" text-[32px] font-[Poppins] text-[#141414]">Welcome to bootjob.</h4>
          <p className=" text-lg text-zinc-500"> We’ve sent an Email with an activation code to your mail <span class="font-medium text-[#141414]">fakeOne@ort.il</span>.</p>
          <div className="flex gap-5 max-w-lg  items-end ">
            <input type="text" className="w-12 h-10 flex items-center text-center  text-black text-base rounded-lg border-2 border-gray-300 focus:border-[#141414] outline-none " />
            <input type="text" className="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg" />
            <input type="text" className="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg" />
            <input type="text" className="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg" />
            <input type="text" className="w-12 h-10 flex items-center text-center  text-black text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg" />
          </div>
          <div className="flex">
            <div className=" px-3 mt-5 text-center">
              <button className="block w-[95%]  bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837]  text-white rounded-2xl px-3 py-3 font-[simple] ">Verify</button>
            </div>
          </div>
        </div>


      </div>

    </>
  )
}

export default ValidationClient