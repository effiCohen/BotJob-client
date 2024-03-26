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
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-[Inter] m-4">All interviews</h1>
                <div className="flex items-center justify-center p-5">
                    <div className="rounded-lg  p-5">
                        <div className="flex">
                            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                                <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                </svg>
                            </div>
                            <input type="text" value={searchText} onChange={handleChange} className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0 drop-shadow-lg" placeholder="" id="" />
                            <input type="button" onClick={onSearchClick} value="Search" className="bg-[#ffafcc] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-[#ffafccaf] transition-colors shadow-lg" />
                        </div>
                    </div>
                </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-4 py-2">Id</th>
                    <th scope="col" className="px-4 py-2">Full name</th>
                    <th scope="col" className="px-4 py-2">Email</th>
                    <th scope="col" className="px-4 py-2">Date</th>
                    <th scope="col" className="px-4 py-2">Role</th>
                    <th scope="col" className="px-4 py-2">Time</th>
                    <th scope="col" className="px-4 py-2">Total questions</th>
                    <th scope="col" className="px-4 py-2">More details</th>
                    <th scope="col" className="px-4 py-2">Delete </th>

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