import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { API_URL, doApiGet } from '../services/apiService';
import { Select, Option } from "@material-tailwind/react";
import { reverse } from 'lodash';
import { toast } from "react-toastify";
import { PieChart } from '@mui/x-charts/PieChart';



const Diagram = () => {
    let [average, setAverage] = useState("");
    let [startTime, setStartTime] = useState("");
    let [endTime, setEndTime] = useState("");
    let [ar, setAr] = useState([]);
    let [ar2, setAr2] = useState([]);
    const [job, setjob] = useState("Software Engineer");

    const [arRole, setArRole] = useState([{ job: "Software Engineer" }]);
    const dispatch = useDispatch();

    useEffect(() => {
        doApiJobs()
        doApiInterviews()
    }, [])

    const doApiJobs = async () => {
        let url = API_URL + "/jobs";
        try {
            let resData = await doApiGet(url);
            setArRole(resData.data);
        } catch (error) {
            console.log(error);
        }
    };

    const doApiInterviews = async () => {
        let url = API_URL + "/interviews/allInterviews"
        try {
            let resData = await doApiGet(url);
            let data = resData.data;
            reverse(data);
            console.log(data);
            setAr(data)
            setAr2(data)
            dispatch(addAdminIntervews({ allAdminIntervews: data }));
        } catch (error) {
            console.log(error);
        }
    }
    const onchangeJob = async (e) => {
        setjob(e)
        let tempAr = [];
        for (let index = 0; index < ar2.length; index++) {
            if (ar2[index].job === e) {
                console.log(ar2[index].job);
                tempAr.push(ar2[index]);
            }

        }
        if (tempAr.length > 0) {
            setAr(tempAr)
        } else {
            toast.error(`It seems that no one has taken interview in ${job}`);
            setAr([])
        }

        console.log(tempAr);
        console.log(ar.length);
        console.log(ar2.length);

        // let tempAverage = 0
        // for (let index = 0; index < tempAr.length; index++) {
        //     tempAverage +=  tempAr[index].time ;        
        // }
        // setAverage(tempAverage/tempAr.length) 

    }



    return (
        <>

            <div className="flex  min-h-[80svh] flex-row justify-center items-center bg-[#fffdfb] ">

                <div className="container bg-white p-5 rounded-3xl shadow-lg border border-gray-300 flex  md:flex-row md:w-1/2">

                    <div className=" mx-auto">
                        <div>
                            <Select label="Select Role" value={job} onChange={(e) => { setjob(e); onchangeJob(e) }} className="w-full">
                                {arRole.map((item, index) => (
                                    <Option key={index} value={arRole[index].job}>{arRole[index].job}</Option>
                                ))}
                            </Select>
                        </div>
                        <div className='mt-11 text-black'>
                            <div>All interviews: {ar2.length}</div>
                            <div>interviews in: {job}: {ar.length}</div>
                            {ar.length > 0 ? <p>Frome: {ar[ar.length - 1].date_created.substring(10, length - 1)},to: {ar[0].date_created.substring(10, length - 1)}</p> : `Absence of Interviews for the ${job} Position`}
                        </div>

                    </div>

                    <div className=' items-end  ml-16'>
                        <PieChart
                            series={[
                                {
                                    data: [
                                        { id: 0, value: ar.length, label: `${job} interviews` },
                                        { id: 1, value: ar2.length - ar.length, label: 'All interviews' },
                                    ],
                                },
                            ]}
                            width={500}
                            height={200}
                        />
                    </div>

                </div>

            </div>



        </>
    )
}

export default Diagram