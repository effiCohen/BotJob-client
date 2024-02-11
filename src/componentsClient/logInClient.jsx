import React from 'react'

const loginClient = () => {

  return (

    <div className="min-w-screen min-h-fit  bg-[#FFFDFB] flex items-center justify-center  p-5   ">
      <div className="w-full  " style={{ maxWidth: '1000px' }}>
        <form className="md:flex  items-center justify-center w-full ">

          <div className="w-full md:w-96  px-5 md:px-10">
            <div className="text-center  ">
              <h1 className="font-[SM-Sans] text-2xl text-[#2E3837]"> <b>Log In</b></h1>

            </div>
            <div>

              <div className="flex items-center justify-center ">
                <div className="w-full sm:w-64 px-1 mb-2 text-start">
                  <label className="text-xs font-semibold px-1">Email:</label>
                  <div className="flex items-center justify-center">
                    <div className="w-10 z-10 pl-0  pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                    <input type="email" className="w-full text-start text-sm -ml-10 pl-10 pr-3 py-1 bg-[#FAF7FF] rounded-xl border-2 border-[#292930c6] outline-none focus:border-gray-400 font-[Poppins]" placeholder="JohenDue@gmail.com" />
                  </div>

                </div>
              </div>

              <div className="  flex items-center justify-center">
                <div className="w-full sm:w-64 px-1 mb-2 text-start">
                  <label className="text-xs font-semibold px-1"> Password:</label>
                  <div className="flex items-center justify-center">
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                    <input type="password" className="w-full -ml-10 pl-10 pr-3 text-sm text-start py-1 rounded-xl border-2   border-[#292930] bg-[#FAF7FF] outline-none focus:border-gray-500 font-[Poppins] " placeholder="password         ....." />

                  </div>
                  <p className='text-red-700 text-end text-xs cursor-pointer'>Forgot password?</p>

                </div>

              </div>



              <div className="flex -mx-3 justify-center">
                <div className="w-[50%] px-3 mt-5">
                  <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-3 py-3 font-[simple]">Log in</button>
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-5">
                <hr className="w-[90%] border border-[#D8DADC] border-1" />
                <div className="font-semibold  text-[#2E3837]">OR</div>
                <hr className="w-full border border-[#D8DADC] border-1" />
              </div>
              <div className="flex -mx-3">
                <div className="w-full px-3 mt-5">
                  <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-3 py-3 font-[simple]">Create an Account</button>
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </div >



  )
}


export default loginClient