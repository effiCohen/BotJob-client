import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, doApiGet } from "../services/apiService";
import { reverse } from "lodash";
import { addIntervews } from "../featuers/intervewSlice";
import { addEmail, addName } from "../featuers/myDetailsSlice";
import ItemHisturyClient from "./itemHisturyClient";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function HomeHistory() {
    let nav = useNavigate();
    let [ar, setAr] = useState([]);
    let [ar2, setAr2] = useState([]);
    let [searchText, setSearchText] = useState("");
    const myName = useSelector(state => state.myDetailsSlice.name);
    const dispatch = useDispatch();

    useEffect(() => {
        doApi()
    }, [])

    const toNewInterview = () => {
        nav("/InterviewRole");
    };

    const doApi = async () => {
        let url = API_URL + "/interviews/myInterview"
        try {
            let resData = await doApiGet(url);
            let data = resData.data.data
            let userName = resData.data.name
            let userEmail = resData.data.email
            dispatch(addName({ name: userName }));
            dispatch(addEmail({ email: userEmail }));
            reverse(data);
            setAr(data)
            setAr2(data)
            dispatch(addIntervews({ allMyIntervews: data }));
        } catch (error) {
            console.log(error);
        }
    }

    const onSearchClick = () => {
        console.log(searchText);
        let tempAr = [];
        for (let index = 0; index < ar2.length; index++) {
            if (ar2[index].job == searchText) {
                tempAr.push(ar2[index]);
            }
        }
        console.log(tempAr);
        console.log(tempAr.length);
        if (tempAr.length > 0) {
            console.log(tempAr.length);
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
        <div className="mt-12 w-full my-6 ">
            <h1 className="text-4xl  font-bold leading-tight text-gray-900 sm:text-5xl  lg:text-3xl m-8 font-[Inter]">
                Welcome {myName}</h1>
            <h2 className="text-2xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight m-3 lg:text-3xl font-[Inter]">
                Your history </h2>
            <p className=" text-lg text-gray-600  font-[Inter]">Your history can teach you and you can learn from it for the future</p>
            <div className="flex items-center justify-around">
                <div></div>
                <div className="flex items-center justify-center p-5">
                    <div className="rounded-lg  p-5">
                        <div className="flex">
                            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                                <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                </svg>
                            </div>
                            <input type="text" value={searchText} onChange={handleChange} className="w-full max-w-[160px] bg-white pl-2 text-base font-semibold outline-0" placeholder="" id="" />
                            <input type="button" onClick={onSearchClick} value="Search" className="bg-[#ffafcc] p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-[#ffafccaf] transition-colors" />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center m-5">
                    {/* <input value={searchText} onChange={handleChange} type="search" name="search" placeholder="Search" className="bg-white h-10 px-5  text-sm focus:outline-none shadow-md rounded-lg p-2 m-2" />
                    <button onClick={onSearchClick} type="submit" className="ml-2"><img src="/src/assets/search1.png" alt="Icon 1" className="h-8 w-8" /></button> */}

                </div>
                <div>
                    <button
                        onClick={toNewInterview}

                        className="group cursor-pointer outline-none hover:rotate-90 duration-300"
                        title="New interview"
                    >
                        <svg
                            className="stroke-[#ffafcc] fill-none group-hover:bg-white group-active:stroke-[#ffafcc] group-active:fill-[#ffafcc] group-active:duration-0 duration-300"
                            viewBox="0 0 24 24"
                            height="45px"
                            width="45px"

                        >
                            <path
                                strokeWidth="1.5"
                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            ></path>
                            <path strokeWidth="1.5" d="M8 12H16"></path>
                            <path strokeWidth="1.5" d="M12 16V8"></path>
                        </svg>

                    </button>

                    {/* <button
                        onClick={toNewInterview}
                        className="block w-full mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-full py-3 px-6 font-[Inter]"
                    >
                        +
                    </button> */}
                </div>
                <div></div>

            </div>

            <div className="flex flex-col">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-6">
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
                                {ar.map((item, index) => (
                                    <ItemHisturyClient key={item._id} item={item} index={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HomeHistory