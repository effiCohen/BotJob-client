import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, doApiGet } from "../services/apiService";
import { reverse } from "lodash";
import { useNavigate } from "react-router-dom";
import { addThisQuestion } from "../featuers/intervewSlice";

function HomeQushtions() {
  const dispatch = useDispatch();
  let [ar, setAr] = useState([]);
  let [interview, setInterview] = useState({});
  let nav = useNavigate();
  const ThisInterview = useSelector(state => state.intervewSlice.ThisInterview);
  const temp_ar = [
    "65e7646ca8a22862c182c8db",
    "65e7646ca8a22862c182c8d7",
  ];

  useEffect(() => {
    setAr(temp_ar)
    doApi()
  }, [])

  const doApi = async () => {
    let url = API_URL + "/interviews/1interview/" + ThisInterview;
    try {
      let resData = await doApiGet(url);
      let data = resData.data
      setInterview(data)
      console.log(data)
      let dataAr = resData.data.questions
      reverse(dataAr);
      setAr(dataAr)
    } catch (error) {
      console.log(error);
    }
  }

  const toAnswer = (Qushtion_id) => {
    dispatch(addThisQuestion({ ThisQuestion: Qushtion_id }));
    console.log(Qushtion_id);
    nav("/homeAnswer");

  };

  return (
    <>
      {/* <style>
        {`
            body {
              overflow: hidden;
            }
        `}
      </style> */}
      <h1 className="font-[SM-Sans] text-2xl text-[#2E3837]">Interview for the position of :{interview.job}</h1>
      <p className='text-[#2E3837] text-sm font-[Poppins] text-center ml-6'> With <b className="text-[#2E3837]">{interview.experience}</b> years of experience </p>

      <div className=" mx-auto  lg:px-8 place-items-center   grid grid-rows-2 sm:grid-rows-5 grid-flow-col gap-1">
        {ar.map((item, index) => (
          <div key={index} className="bg-black w-full lg:w-[35%] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#FFFDFB] before:to-[#FBF9F3] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#FBF9F3] hover:text-[#2E3837]" >
            <span onClick={() => toAnswer(item)} className="">Qushtion {index + 1}</span>
            <img src="/src/assets/click (1).png" alt="Your Icon" className="w-4 h-4  ml-2 absolute right-2 lg:right-1 lg:flex-none hidden lg:block" />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeQushtions;