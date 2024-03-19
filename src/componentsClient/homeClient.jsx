import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { API_URL, doApiGet } from "../services/apiService";
import { addName } from "../featuers/myDetailsSlice";
function HomeClient() {
  const myName = useSelector(state => state.myDetailsSlice.name);
  let nav = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    doApi()
  }, [])
  const doApi = async () => {
    let url = API_URL + "/users/myInfo"
    try {
      let resData = await doApiGet(url);
      let userName = resData.data.FirstName + " " + resData.data.LastName;
      dispatch(addName({ name: userName }));
    } catch (error) {
      console.log(error);
    }
  }
  const toHistory = () => {
    nav("/history");
  };
  const toNewInterview = () => {
    nav("/InterviewRole");
  };


  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#FFFDFB]">
      <h1 style={{ marginTop: '-50px' }} className="mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">
        Welcome {myName}
      </h1>
      <div className="flex justify-center items-center space-x-8 pt-10">


        <div className="w-1/2 text-center lg:text-start justify-between">
          <div style={{ marginTop: '-150px' }} className="mt-3">

            <div className="flex flex-col">

              <button
                onClick={toNewInterview}
                className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5 relative"
              >
                New Interview..
                <img
                  src="/src/assets/interview2.png"
                  alt="Icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
              </button>
              <button
                onClick={toHistory}
                className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5 relative"
              >
                Your history
                <img
                  src="/src/assets/history.png"
                  alt="Icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel on the left side */}



      </div>
    </section>
  );
}


export default HomeClient