import React from 'react'

 function forgot() {
  return (
    <>
          <h1 className="text-center text-[50px] font-sans bg-[#FFFDFB]"> Recover password </h1>

      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                  Recover password
                  </h6>
                </div>
                
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type=""
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                  
                  
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                   
                     
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <a
                href="/validation"
                className="github-star ml-1 text-white font-bold px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-cyan-950 active:bg-cyan-950 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150" // Adjusted padding
                target="_blank"
              
          >
                     Send Code
          </a>
                  </div>
                </form>
              </div>
            </div>
        
          </div>
        </div>
      </div>
    </>
  )
}

export default forgot;