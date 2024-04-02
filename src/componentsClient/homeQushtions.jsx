import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, doApiGet } from "../services/apiService";
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
      let dataAr = resData.data.questions
      setAr(dataAr)
    } catch (error) {
      console.log(error);
      nav("/history");
    }
  }

  const toAnswer = (Qushtion_id) => {
    dispatch(addThisQuestion({ ThisQuestion: Qushtion_id }));
    nav("/homeAnswer");

  };
  const BackToHistory = () => {
    nav("/history");
  };

  return (
    <>
      <div className="flex flex-wrap justify-between items-center my-3  mx-auto max-w-screen-xl">
        <img onClick={() => BackToHistory()} src="/src/assets/left-arrow.png" className="mr-3 h-6 sm:h-6" style={{ marginTop: '-110px', marginLeft: '-20px' ,height:'30px' }} alt="" />
        <div className="mx-auto mt-10">
          <h1 className="text-xl font-bold text-gray-900 sm:text-3xl  m-3 font-[Inter]">Interview for the position of {interview.job}</h1>
          <p className='"text-xl font-bold  text-gray-900 sm:text-lg m-3   font-[Inter]"'> With <b className="text-xl font-bold  text-gray-900 sm:text-xl lg:text-lg font-[Inter]">{interview.experience}</b> years of experience </p>
        </div>

      </div>
      <div className=" mx-auto  lg:px-8 place-items-center   grid grid-rows-2 sm:grid-rows-5 grid-flow-col gap-1">
        {ar.map((item, index) => (
          <div onClick={() => toAnswer(item)} key={index} className="bg-[#B80672] w-[85%] lg:w-[29%] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-300 ease-in-out shadow-md hover:scale-95 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#ac5089] before:to-[#ac5089] before:transition-all before:duration-700 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#FBF9F3] hover:text-[#FBF9F3]" >
            <span className="font-[Inter]">Question {index + 1}</span>
            <img src="/src/assets/click (1).png" alt="Your Icon" className="w-4 h-4  ml-2 absolute right-2 lg:right-1 lg:flex-none hidden lg:block" />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeQushtions;