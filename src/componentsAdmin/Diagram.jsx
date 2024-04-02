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
            setAr(data)
            setAr2(data)
            dispatch(addAdminIntervews({ allAdminIntervews: data }));
        } catch (error) {
            console.log(error);
        }
    };
    const onchangeJob = async (e) => {
        let tempAr = [];
        for (let index = 0; index < ar2.length; index++) {
            setjob(job);
            if (ar2[index].job === e) {
                tempAr.push(ar2[index]);
            }
        }
        if (tempAr.length > 0) {
            setjob(e)
            setAr(tempAr)
        } else {
            toast.error(`It seems that no one has taken an interview in ${e}`);
            setjob(e)
            setAr([])
        }
    };



    return (
        <>

            <div className="   flex  min-h-[90svh] flex-row justify-center items-center bg-[#FAF7FF] font-[Inter]">
                <div className=" bg-transparent  p-5 rounded-3xl shadow-2xl  border border-gray-300 flex w-full  md:flex-row lg:w-[55%] ">
                    <div className=" mx-auto p-3">
                        <div>
                            <Select label="Select Role" value={job} onChange={(e) => { setjob(e); onchangeJob(e); }} className="w-full"   >
                                {arRole.map((item, index) => (
                                    <Option key={index} value={arRole[index].job}>{arRole[index].job}</Option>))}
                            </Select>
                        </div>
                        <div className='mt-11 text-black w-full'>
                            <div>All interviews: {ar2.length}</div>
                            {ar.length > 0 ? <div>interviews in: {job}: {ar.length}</div> : ""}

                            {ar.length > 0 ? <p>Between: {new Date(ar[ar.length - 1].date_created).toLocaleDateString('en-GB')} -  {new Date(ar[0].date_created).toLocaleDateString('en-GB')}</p> : `Absence of Interviews for the ${job} Position`}
                        </div>
                    </div>
                    <div className=' items-end  '>
                        <PieChart
                            colors={['#B80672', '#ac5089']} // Use palette
                            series={[
                                {
                                    cx: 115,
                                    cornerRadius: 10,
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
            </div >
        </>
    )
}

export default Diagram