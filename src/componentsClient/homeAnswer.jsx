import React from 'react'
import { Textarea } from "@material-tailwind/react";


function HomeAnswer() {
    return (
<>
<header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        
            <img src="/src/assets/return.png" class="mr-3 h-6 sm:h-6" alt="" />
               
            </div>
           
    </nav>
</header>


<h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-4xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj mb-3 underline">(question ?)</h1>


<div className="flex flex-col items-center w-[32rem] mx-auto">
        <Textarea variant="static" placeholder="User Answer :" rows={8} />
        <div className="flex w-full justify-between py-1.5">
          <div className="flex gap-2">
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-[32rem] mx-auto">
        <Textarea variant="static" placeholder="Ai Answer :" rows={8} />
        <div className="flex w-full justify-between py-1.5">
          <div className="flex gap-2">
          </div>
        </div>
      </div>
</>

        )
  }
  
  export default HomeAnswer