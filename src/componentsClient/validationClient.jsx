// import React from 'react'

function ValidationClient() {
  const inputFields = Array.from({ length: 5 }, (_, i) => (
    <input
      key={i}
      type="text"
      className="w-12 h-10 flex items-center text-center text-black text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg"
    />
  ));
  return (
    <>
      <h1 className="text-center text-[50px] font-[inter] bg-[#FFFDFB]  "> Let’s go! </h1>

      <div className="  flex min-h-screen flex-col items-center justify-between overflow-hidden container bg-[#fffdfbfa] ">

        <figure className='max-w-lg  mx-auto  '>
          <img src="/src/assets/Asset@2x-8 1.png" alt="email@ " className='h-[30%] w-[50%] mx-auto' />
        </figure>
        <div className="max-w-xl px-5 text-center flex flex-col  items-center justify-center mb-auto  ">
          <h1 className='font-bolt font-[Poppins] text-[42px]'>we just emailed you.</h1>
          <p className=" text-lg text-zinc-500"> We’ve sent an Email with an activation code to your mail <span className="font-medium text-[#141414]">fakeOne@ort.il</span>.</p>
          <div className="flex gap-5 max-w-lg items-end">
            {inputFields.map((inputField, index) => (
              <div key={index}>{inputField}</div>
            ))}
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