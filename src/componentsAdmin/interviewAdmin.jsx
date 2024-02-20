import React from 'react'

function InterviewAdmin() {
  return (
<> 
<header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        
            <img src="/src/assets/return.png" class="mr-3 h-6 sm:h-6" alt="" />
            <img src="/src/assets/home.png" class="mr-3 h-6 sm:h-6" alt="" />
               
            </div>
           
    </nav>
</header>


<h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj"> Interview (Role) </h1>
    <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">Question 1</button>
    <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">Question 2</button>
    <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">Question 3</button>

    <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">Load items</button>

  </> 
  )
}

export default InterviewAdmin

