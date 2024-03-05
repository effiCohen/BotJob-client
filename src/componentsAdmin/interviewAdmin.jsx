import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { API_URL, doApiGet } from "../services/apiService";
import { reverse } from "lodash";
import { useNavigate } from "react-router-dom";

function InterviewAdmin() {
    let [ar, setAr] = useState([]);
    let nav = useNavigate();
    const ThisInterview = useSelector(state => state.intervewSlice.ThisInterview);
    const temp_ar = [
      "Question 1",
      "Question 2",
      "Question 3",
      "Question 4",
      "Question 5"
     

    ];
  
    useEffect(() => {
      setAr(temp_ar)
      doApi()
    }, [])
  
    const doApi = async () => {
      let url = API_URL + "/interviews/1interview/" + ThisInterview;
      console.log(url);
      try {
        let resData = await doApiGet(url);
        let data = resData.data
        let dataAr = resData.data.questions
        console.log(data);
        console.log(dataAr);
        reverse(dataAr);
        setAr(dataAr)
      } catch (error) {
        console.log(error);
      }
    }
  
    const toAnswer = (Qushtion_id) => {
      console.log(Qushtion_id);
      // nav("/homeAnswer");
    };
  


  return (
<> 
<header>
    <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        
            <img src="/src/assets/return.png" className="mr-3 h-6 sm:h-6" alt="" />
            <img src="/src/assets/home.png" className="mr-3 h-6 sm:h-6" alt="" />
               
            </div>
           
    </nav>
</header>

      <style>
        {`
            body {
              overflow: hidden;
            }
        `}
      </style>
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj"> Interview (Role) </h1>

      <div className=" mx-auto  lg:px-8 place-items-center   grid grid-rows-2 sm:grid-rows-5 grid-flow-col gap-1">
        {ar.map((item, index) => (
          <button onClick={toAnswer(item)} key={index} className="bg-black w-full lg:w-[35%] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FFFDFB] before:to-[#FBF9F3] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#FBF9F3] hover:text-[#2E3837]" >
            <span className="">Qushtion {index + 1} id={item}</span>
            <img src="/src/assets/click (1).png" alt="Your Icon" className="w-4 h-4  ml-2 absolute right-2 lg:right-1 lg:flex-none hidden lg:block" />
          </button>
        ))}
      </div>
    </>
  )
}

export default InterviewAdmin

