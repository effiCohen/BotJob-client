import React, { useEffect } from 'react';
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import { API_URL, doApiGet } from '../services/apiService';
import { useNavigate } from 'react-router-dom';
import { saveSettingLocal } from '../services/settingServis';
import Lottie from 'react-lottie';
import lottieJson from '../assets/Animation - 1711308224151.json'

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
        doApi();
    }, []);

    const doApi = async () => {
        let url = API_URL + "/jobs";
        try {
            let resData = await doApiGet(url);
            setArRole(resData.data);
        } catch (error) {
            console.log(error);
        }
    };

    const onSaveClick = () => {
        let settingObg = {
            "job": job,
            "experience": experience,
            "questions": questionCount
        };
        saveSettingLocal(settingObg);
        nav("/InterviewRole");
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-[#fffdfb]">
                <div className="container mx-auto  bg-white p-8 rounded-3xl shadow-lg border border-gray-300 flex flex-col md:flex-row">
                    <div className="w-full md:w-1/2">
                        <h1 className="font-bold text-3xl text-[#1E1E1E] font-inter mb-4">Let's build the interview</h1>
                        <h2 className="font-bold text-sm text-[#1E1E1E] font-inter mb-4">Let's first choose a role</h2>
                        <div className="mb-4">
                            <Select label="Select Role" value={job} onChange={(e) => setjob(e)} className="w-full">
                                {arRole.map((item, index) => (
                                    <Option key={index} value={arRole[index].job}>{arRole[index].job}</Option>
                                ))}
                            </Select>
                        </div>
                        <h2 className="font-bold text-sm text-[#1E1E1E] font-inter mb-4">Select years of experience</h2>
                        <div className="mb-4">
                            <Select label="Years of experience" value={experience} onChange={(e) => setExperience(e)} className="w-full">
                                {arexperience.map((item, index) => (
                                    <Option key={index} value={(index + 1).toString()}>{(index + 1).toString()}</Option>
                                ))}
                            </Select>
                        </div>
                        <div className="text-center mb-4">
                            <h2 className="font-bold text-sm text-[#1E1E1E] font-inter mb-4">Select number of questions</h2>
                            <div className="mt-4">
                                <Select label="Number of Questions" value={questionCount} onChange={(e) => setQuestionCount(e)} className="w-full">
                                    {arNum.map((item, index) => (
                                        <Option key={index} value={arNum[index]}>{arNum[index]}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                        <button onClick={() => onSaveClick()} className="block mx-auto bg-[#ffafcc] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-lg px-6 py-3">
                            Save
                        </button>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
                        <Lottie options={{ loop: true, autoplay: true, animationData: lottieJson }} height={300} width={300} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Setting;
