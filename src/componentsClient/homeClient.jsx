import  {React } from "react";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function HomeClient() {
  const myName = useSelector(state => state.myDetailsSlice.name);
  let nav = useNavigate();
  const toHistory = () => {
    nav("/history");
  };
  const toNewInterview = () => {
    nav("/InterviewRole");
  };
  return (
    <div className="mt-3">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj"> Welcame {myName}</h1>
      <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">  something.................</p>
      <div className="flex flex-col">
      
      <button onClick={toHistory} className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5 relative">
  Your history
  <img src="/src/assets/history.png" alt="Icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5" />
</button>
<button onClick={toNewInterview} className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5 relative">
          New Interview..
        <img src="/src/assets/interview2.png" alt="Icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5" />

        </button>
      </div>

    </div>
  )
}

export default HomeClient