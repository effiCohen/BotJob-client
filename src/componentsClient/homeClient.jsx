import  {React , useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemClient from "./itemClient";
import { API_URL, doApiGet } from "../services/apiService";
import { reverse } from "lodash";
import { addIntervews } from "../featuers/intervewSlice";

function HomeClient() {
  let [ar, setAr] = useState([]);
  const myEmail = useSelector((myStore) => myStore.emailSlics.myEmail);
  const myIntervews = useSelector((myStore) => myStore.intervewSlice.myIntervews);
  const dispatch = useDispatch();
  let temp_ar = [
    {
      "_id": 1,
      date_created : "test",
      job : "test",
      questions : [1,1,1],
    },
    {
      "_id": 2,
      date_created : "test2",
      job : "test2",
      questions : [1,1,1],
    }
  ];
  const useEffect = async (() => {
    setAr(temp_ar)
     doApi()
    console.log("myIntervews", myIntervews);
  }, [])
  
  const doApi = async () => {
    let url = API_URL + "/interviews/myIntervew"
    try {
        let  resData  = await doApiGet(url);  
        console.log(resData);
        let data = resData.data
        reverse(data);
        setAr(data)
        dispatch(addIntervews({ myIntervews: data }));
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

  return (
    <div className="mt-3">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj"> Welcame {myEmail}</h1>
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">Your History</h1>
      <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">  Your history can teach you and you can only learn from it</p>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-4 py-2">Id</th>
                    <th scope="col" className="px-4 py-2">Date</th>
                    <th scope="col" className="px-4 py-2">Role</th>
                    <th scope="col" className="px-4 py-2">Time</th>
                    <th scope="col" className="px-4 py-2">The number of questions</th>
                    <th scope="col" className="px-4 py-2">More details</th>
                  </tr>
                </thead>

                <tbody>
                  {ar.map((item) => {
                    return (
                      <ItemClient key={item._id} item={item} />
                    )
                  }
                  )}
                </tbody>
              </table>
            </div>

          </div>

        </div>
        <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">New Interview..</button>

      </div>

    </div>
  )
}

export default HomeClient