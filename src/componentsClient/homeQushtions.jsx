// import React from 'react'

function HomeQushtions() {
    return (
      <>
        <style>
          {`
            body {
              overflow: hidden;
            }
          `}
        </style>
  
        <header>
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <img src="/src/assets/return.png" className="mr-3 h-6 sm:h-6" alt="" />
            </div>
          </nav>
        </header>
  
        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj mb-3"> Learn From Mistakes</h1>
        <h1 className="text-4xl leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj mb-3"> We believe in learning from mistakes. L.F.M</h1>
  
        <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5">
          Question 1
          <img src="/src/assets/click (1).png" alt="Your Icon" className="w-4 h-4 inline-block ml-2" />
        </button>
        <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5">
          Question 2
          <img src="/src/assets/click (1).png" alt="Your Icon" className="w-4 h-4 inline-block ml-2" />
        </button>
        <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5">
          Question 3
          <img src="/src/assets/click (1).png" alt="Your Icon" className="w-4 h-4 inline-block ml-2" />
        </button>
        <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5">
          Question 4
          <img src="/src/assets/click (1).png" alt="Your Icon" className="w-4 h-4 inline-block ml-2" />
        </button>
        <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5">
          Question 5
          <img src="/src/assets/click (1).png" alt="Your Icon" className="w-4 h-4 inline-block ml-2" />
        </button>
  
        {/* <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5">Load items</button> */}
      </>
    );
  }
  
  export default HomeQushtions;
  