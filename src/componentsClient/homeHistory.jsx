import  {React , useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemClient from "./itemClient";
import { API_URL, doApiGet } from "../services/apiService";
import { reverse } from "lodash";
import { addIntervews, addThisIntervews } from "../featuers/intervewSlice";
import { addEmail, addName } from "../featuers/myDetailsSlice";

function HomeHistory() {
    let [ar, setAr] = useState([]);
    const myName = useSelector(state => state.myDetailsSlice.name);
    const allMyIntervews = useSelector(state => state.intervewSlice.allMyIntervews);
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
     useEffect(() => {
      setAr(temp_ar)
       doApi()
    }, [])
    
    const doApi = async () => {
      let url = API_URL + "/interviews/myInterview"
      try {
        let  resData  = await doApiGet(url);  
          let data = resData.data.data
          let userName = resData.data.name
          let userEmail = resData.data.email
          dispatch(addName({ name: userName }));
          dispatch(addEmail({ email: userEmail }));
          reverse(data);
          setAr(data)
          dispatch(addIntervews({ allMyIntervews: data }));
      } catch (error) {
          console.log(error);
      }
  }
    return (
        <div className="mt-3">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj"> Welcame {myName}</h1>
          <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">o Your History</h1>
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
                        <th scope="col" className="px-4 py-2">Total questions</th>
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
    
          </div>
    
        </div>
      )
}

export default HomeHistory