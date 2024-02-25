// import React from 'react'
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";

const Setting = () => {
    const [questionCount, setQuestionCount] = useState(3); // Initial question count

    return (
        <>
            <div className="mx-auto flex  flex-col items-center justify-between overflow-hidden container bg-[#FFFDFB] sm:flex sm:flex-col sm:mx-auto">
                <div className="max-w-xl  mx-auto ">
                    <h1 className="font-bold sm:text-[30px] text-[20px]  lg:text-center text-[#1E1E1E] font-inter">Let's build the interview</h1>
                    <h2 className="font-bold  text-start  sm:text-[20px] text-[16px] text-[#1E1E1E] font-inter">Let's first choose a role and the experience</h2>
                    <p className="text-gray-500 text-[15px] text-start my-2">Together we will build your interview.</p>

                    <div className="gap-2 flex   flex-wrap justify-center items-center ">
                        {[{ label: "Select Role", options: ["Option#1", "Option#2", "Option#3", "Option#4", "Option#5"] },
                        { label: "Type of interview", options: ["Option#1", "Option#2", "Option#3"] },
                        { label: "Additional Option", options: ["Option#1", "Option#2", "Option#3", "Option#4", "Option#5"] }].map((selectData, index) => (
                            <div key={index} className="mb-1 lg:mb-2">
                                <Select label={selectData.label} className="w-full">
                                    {selectData.options.map((option, optionIndex) => (
                                        <Option key={optionIndex}>{option}</Option>
                                    ))}
                                </Select>
                            </div>
                        ))}
                    </div>

                    <div className="mx-auto flex flex-col text-center justify-center items-center">
                        <h2 className="font-bold sm:text-[20px] text-[16px] text-[#1E1E1E] font-inter">Second, choose the number of questions</h2>
                        <p className="text-gray-500 text-sm mb-2 w-[80%] text-center">For a short interview choose 3, for an advanced interview choose 8 and when you are ready choose 12</p>
                        <div className=" place-items-center mx-auto">
                            {[{ label: "Hoe much?", options: ["Option#1", "Option#2", "Option#3", "Option#4", "Option#5"] },
                            ].map((index) => (
                                <div key={index} className="mb-1 flex  lg:mb-2 mx-auto justify-center items-center">
                                    <Select label="Number of Questions" value={questionCount} onChange={(e) => setQuestionCount(e.target.value)} className="w-full">
                                        {[3, 8, 12].map((count, index) => (
                                            <Option key={index} value={count}>{count}</Option>
                                        ))}
                                    </Select>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="mt-1">
                        <button className="block   mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-4 py-3 font-simple">
                            Save
                        </button>
                    </div>
                </div>
            </div>




        </>
    )
}

export default Setting