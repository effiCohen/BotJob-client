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
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">
        Welcome {myName}
      </h1>
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">
        Your History
      </h1>
      <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
        Your history can teach you and you can only learn from it
      </p>

      <div className="relative text-gray-600">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966;" }}
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-4 py-2">
                      Id
                    </th>
                    <th scope="col" className="px-4 py-2">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-2">
                      Role
                    </th>
                    <th scope="col" className="px-4 py-2">
                      Time
                    </th>
                    <th scope="col" className="px-4 py-2">
                      Total questions
                    </th>
                    <th scope="col" className="px-4 py-2">
                      More details
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {ar.map((item) => (
                    <ItemClient key={item._id} item={item} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default HomeHistory