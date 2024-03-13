import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemAdmin from "./itemAdmin";
import { API_URL, doApiGet } from "../services/apiService";
import { reverse } from "lodash";
import { addAdminIntervews } from "../featuers/intervewSlice";
import { toast } from "react-toastify";


function DashboardAdmin() {
  let [ar, setAr] = useState([]);
  let [ar2, setAr2] = useState([]);
  let [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    doApi()
  }, [])

  const doApi = async () => {
    let url = API_URL + "/interviews/allInterviews"
    try {
      let resData = await doApiGet(url);
      let data = resData.data;
      reverse(data);
      setAr(data)
      setAr2(data)
      dispatch(addAdminIntervews({ allAdminIntervews: data }));
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  }


  const onSearchClick = () => {
    let tempAr = [];
    for (let index = 0; index < ar2.length; index++) {
      if (ar2[index].job == searchText) {
        tempAr.push(ar2[index]);
      }
    }
    if (tempAr.length > 0) {
      setAr(tempAr)
    } else {
      toast.error("The search value was not found");
      console.log("The search value was not found");
      if (searchText == "") {
        setAr(ar2)
      }
    }
  }

  const handleChange = (event) => {
    setSearchText(event.target.value);
  }

  return (
    <>
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">All the interviews</h1>
      <div className="flex items-center justify-center">
        <input value={searchText} onChange={handleChange} type="search" name="search" placeholder="Search" className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none" />
        <button onClick={onSearchClick} type="submit" className="ml-2"><img src="/src/assets/search1.png" alt="Icon 1" className="h-8 w-8" /></button>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-4 py-2">Id</th>
                    <th scope="col" className="px-4 py-2">Name</th>
                    <th scope="col" className="px-4 py-2">Date</th>
                    <th scope="col" className="px-4 py-2">Role</th>
                    <th scope="col" className="px-4 py-2">Time</th>
                    <th scope="col" className="px-4 py-2">Total questions</th>
                    <th scope="col" className="px-4 py-2">More details</th>
                  </tr>
                </thead>

                <tbody>
                  {ar.map((item, index) => {
                    return (
                      <ItemAdmin key={item._id} item={item} index={index} />
                    )
                  }
                  )}
                </tbody>
              </table>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default DashboardAdmin