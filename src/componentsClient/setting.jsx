// import React from 'react'
import { Select, Option } from "@material-tailwind/react";

const Setting = () => {
    return (
        <>
            <div className="min-w-screen min-h-fit rounded-3xl flex-col   flex items-center justify-center px-2 py-2 bg-[#FFFDFB]  ">
                <div className="   w-full overflow-hidden flex flex-col items-center justify-around " style={{ maxWidth: '1000px' }}>
                    <div className="md:flex  w-full flex items-center justify-center">

                        <div className="w-full  py-10 px-5 md:px-10 ">

                            <h1 className="font-bold text-3xl text-center text-[#1E1E1E] font-[inter]"> Let's build the interview</h1>
                            <h1 className="font-bold text-2xl text-[#1E1E1E] font-[inter] text-start">  Let's First choose a role and the experience</h1>
                            <p className='text-gray-300 text-sm font-[Poppins] text-start '>Together we will build your interview.</p>

                            <div className="flex flex-col lg:flex-grow lg:flex-row justify-around items-center mt-10">
                                {[
                                    { label: "Select Role", options: ["Option#1", "Option#2", "Option#3", "Option#4", "Option#5"] },
                                    { label: "Type of interview", options: ["Option#1", "Option#2", "Option#3"] }
                                ].map((selectData, index) => (
                                    <div key={index} className="w-auto lg:w-72 flex items-start justify-center mx-auto px-2 py-2">
                                        <Select label={selectData.label} animate={{ mount: { y: 0 }, unmount: { y: 25 }, }}>
                                            {selectData.options.map((option, optionIndex) => (
                                                <Option key={optionIndex}>{option}</Option>
                                            ))}
                                        </Select>
                                    </div>
                                ))}
                            </div>
                            <div className="min-w-screen min-h-fit rounded-3xl flex-col   flex items-center justify-center px-2 py-2 bg-[#FFFDFB]  ">
                                <div className="   w-full overflow-hidden flex flex-col items-center justify-around ">
                                    <div className="  w-full  items-center justify-center">
                                        <h1 className="font-bold text-2xl text-[#1E1E1E] font-[inter] text-start"> Second, we choose the number of questions</h1>
                                        <p className='text-gray-300 text-sm font-[Poppins] text-start '>For a short interview choose 3, for an advanced interview choose 8 and when you are ready choose 12</p>




                                    </div>
                                </div>
                                <div className="lg:w-32 flex items-start justify-center px-2 py-2 mx-auto m-20 mb-10 ">
                                    <Select label="How Much?">
                                        {[...Array(12)].map((_, index) => (
                                            <Option key={index}>{index + 1}</Option>
                                        ))}
                                    </Select>
                                </div>
                                <div className="w-full px-3 mt-5 tect-center">
                                    <button className="block w-[100%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-3 py-3 font-[simple]">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>






            </div>




        </>
    )
}

export default Setting