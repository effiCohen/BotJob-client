import React, { useEffect } from 'react'
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { API_URL, doApiGet } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import { saveSettingLocal } from '../services/settingServis';
import { toast } from 'react-toastify';

const Setting = () => {
    let nav = useNavigate();
    let arexperience = [];
    for (let i = 1; i <= 100; i++) {
        arexperience.push(i);
    }
    let arNum = ["1", "2", "3", "4", "5"];
    const [questionCount, setQuestionCount] = useState("3");
    const [experience, setExperience] = useState("2");
    const [job, setjob] = useState("Software Engineer");
    const [arRole, setArRole] = useState([{ job: "Software Engineer" }]);

    useEffect(() => {
        doApi()
    }, [])

    const doApi = async () => {
        let url = API_URL + "/jobs";
        try {
            let resData = await doApiGet(url);
            setArRole(resData.data);
        } catch (error) {
            toast.error(error);
            console.log(error);

        }
    }

    const onSaveClick = () => {
        let settingObg = {
            "job": job,
            "experience": experience,
            "questions": questionCount
        }
        console.log(settingObg);
        saveSettingLocal(settingObg)
        nav("/InterviewRole");
    }


    return (
        <>
            <div className="mx-auto flex  flex-col items-center justify-between overflow-hidden container bg-[#FFFDFB] sm:flex sm:flex-col sm:mx-auto">
                <div className="max-w-xl  mx-auto ">
                    <h1 className="font-bold sm:text-[30px] text-[20px]  lg:text-center text-[#1E1E1E] font-inter">Let's build the interview</h1>
                    <h2 className="font-bold  text-start  sm:text-[20px] text-[16px] text-[#1E1E1E] font-inter">Let's first choose a role</h2>
                    <div className="gap-2 flex   flex-wrap justify-center items-center ">
                        <div className="mb-1 lg:mb-2">
                            <Select value={job} label="Select Role" onChange={(e) => setjob(e)} className="w-full">
                                {arRole.map((item, index) => (
                                    <Option key={index} value={arRole[index].job}>{arRole[index].job}</Option>
                                ))}
                            </Select>
                        </div>
                    </div>

                    <h2 className="font-bold  text-start  sm:text-[20px] text-[16px] text-[#1E1E1E] font-inter">Select years of experience</h2>
                    <div className="gap-2 flex   flex-wrap justify-center items-center ">
                        <div className="mb-1 flex  lg:mb-2 mx-auto justify-center items-center">
                            <Select label="Years of experience" value={experience} onChange={(e) => setExperience(e)} className="w-full">
                                {arexperience.map((item, index) => (
                                    <Option key={index} value={(index + 1).toString()}>{(index + 1).toString()}</Option>
                                ))}
                            </Select>
                        </div>
                    </div>

                    <div className="mx-auto flex flex-col text-center justify-center items-center">
                        <h2 className="font-bold sm:text-[20px] text-[16px] text-[#1E1E1E] font-inter">Select the number of questions</h2>
                        <p className="text-gray-500 text-sm mb-2 w-[80%] text-center">.....</p>
                        <div className=" place-items-center mx-auto">
                            <div className="mb-1 flex  lg:mb-2 mx-auto justify-center items-center">
                                <Select label="Number of Questions" value={questionCount} onChange={(e) => setQuestionCount(e)} className="w-full">
                                    {arNum.map((item, index) => (
                                        <Option key={index} value={arNum[index]}>{arNum[index]}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>


                    <div className="mt-1">
                        <button onClick={() => onSaveClick()} className="block   mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-4 py-3 font-simple">
                            Save
                        </button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Setting