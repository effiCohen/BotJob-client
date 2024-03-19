import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, doApiGet } from "../services/apiService";
import { reverse } from "lodash";
import { addIntervews } from "../featuers/intervewSlice";
import { addEmail, addName } from "../featuers/myDetailsSlice";
import ItemHisturyClient from "./itemHisturyClient";
import { toast } from "react-toastify";


function HomeHistory() {
    let [ar, setAr] = useState([]);
    let [ar2, setAr2] = useState([]);
    let [searchText, setSearchText] = useState("");
    const myName = useSelector(state => state.myDetailsSlice.name);
    const dispatch = useDispatch();
    let temp_ar = [
        {
            "_id": 1,
            date_created: "test",
            job: "test",
            questions: [1, 1, 1],
        },
        {
            "_id": 2,
            date_created: "test2",
            job: "test2",
            questions: [1, 1, 1],
        }
    ];
    useEffect(() => {
        setAr(temp_ar)
        doApi()
    }, [])

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
        <div className="mt-3">
            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">
                Welcome {myName}</h1>
            <h2 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">
                Your History </h2>
            <p className="m-2 text-lg text-gray-600 sm:mt-8 font-inter">Your history can teach you and you can learn from it for the future</p>
            <div className="flex items-center justify-center">
                <input value={searchText} onChange={handleChange} type="search" name="search" placeholder="Search" className="bg-white h-10 px-5 pr-10 text-sm focus:outline-none shadow-md rounded-lg p-2 m-2" />
                <button onClick={onSearchClick} type="submit" className="ml-2"><img src="/src/assets/search1.png" alt="Icon 1" className="h-8 w-8" /></button>
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
                                    {ar.map((item, index) => (
                                        <ItemHisturyClient key={item._id} item={item} index={index} />
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