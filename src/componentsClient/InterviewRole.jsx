import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, doApiMethod } from '../services/apiService';
import { addNewIntervew } from '../featuers/newIntervewSlice';
import { checkSettingLocal } from '../services/settingServis';
import { toast } from 'react-toastify';
import Spinner from "../Spinner";

function InterviewRole() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const myName = useSelector(state => state.myDetailsSlice.name);
    const nav = useNavigate();
    let setting = {};

    const startTheInterview = () => {
        let settingLocal = (checkSettingLocal());
        if (settingLocal) {
            setting = settingLocal;
            doApi(setting);
        } else {
            console.log("Go to settings to select preferences");
            toast.error("Go to settings to select preferences");
            nav("/setting");
        }
    };

    const doApi = async (_dataBody) => {
        setLoading(true);
        toast.info("Please wait a moment and a personalized interview will be uploaded for you");
        let url = API_URL + "/interviews";
        try {
            let resp = await doApiMethod(url, "POST", _dataBody);
            if (resp.data._id) {
                dispatch(addNewIntervew({ newIntervew: resp.data }));
                nav("/Interview");
            }
        } catch (err) {
            console.log(err.response.data);
            setLoading(false);
        }
    }

    return (
        <>

            <section className="container flex justify-center mx-auto  flex-col w-[80%] lg:w-full items-center">
                {loading ? (
                    <div className="flex justify-center items-center h-screen">
                        <Spinner />
                    </div>
                ) : (
                    <>

                        <h1 className="text-center font-inter text-2xl lg:text-xl font-bold text-[#2E3837]">Hello :{myName}</h1>
                        <h2 className="text-center font-inter text-2xl lg:text-xl font-bold text-[#2E3837]"> Before we start let's set some rules</h2>
                        <h2 className="lg:text-start text-center font-madimi font-bold text-xl text-bold text-[#2E3837]">
                        No phone 
                        <img src="/src/assets/smartphone.png" alt="Icon" className="inline-block w-6 h-6 mr-2" />
                        </h2>
                        <p className="text-lg  leading-tight text-[#84d3cb]  sm:leading-tight lg:leading-tight font-madimi mb-3 ">Don't use the answer phone or as a distraction, in fact put it aside</p>
                        <h2 className="lg:text-start text-center font-madimi font-bold text-xl text-bold text-[#2E3837]"> 
                        Without  Google
                        <img src="/src/assets/google.png" alt="Google Icon" className="inline-block w-6 h-6 mx-2" /> 
                        and Chat 
                        <img src="/src/assets/chat-gpt.png" alt="Chat GPT Icon" className="inline-block w-6 h-6 mx-2" /> 
                        {/* <img src="/src/assets/google.png" alt="Icon" className="inline-block w-6 h-6 mr-2" /> */}
                        </h2>
                        <p className=" text-lg  leading-tight text-[#84d3cb]   sm:leading-tight lg:leading-tight font-madimi mb-3">Don't fool yourself you are here to do a professional interview</p>
                        <h2 className="lg:text-start text-center font-madimi font-bold text-xl text-bold text-[#2E3837]">Be clear 
                        <img src="/src/assets/pen.png" alt="Chat GPT Icon" className="inline-block w-6 h-6 mx-2" /> 
                        </h2>
                        <p className=" text-lg  leading-tight text-[#84d3cb]   sm:leading-tight lg:leading-tight font-madimi mb-3">Give clear answers and be confident</p>
                        <h2 className=" text-center font-madimi font-bold text-xl  text-[#2E3837]">Professional tip</h2>
                        <h3 className=" text-center font-madimi text-xl font-semibold text-[#2E3837]">Don't forget to breathe</h3>
                        <img src="/src/assets/Animation - 1710626342930.gif" alt="Chat GPT Icon" className="inline-block w-20 h-20 mx-2" /> 
                        
                        <button onClick={startTheInterview} className="bg-black w-full lg:w-[35%] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-700 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#000000] before:to-[#000000] before:transition-all before:duration-700 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#ffffff] hover:text-[#ebf7ff]"> Start</button>
                    </>
                )}
            </section>

        </>
    )
}

export default InterviewRole;
