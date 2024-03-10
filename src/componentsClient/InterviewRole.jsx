import React from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, doApiMethod } from '../services/apiService';
import { addNewIntervew } from '../featuers/newIntervewSlice';
import { checkSettingLocal } from '../services/settingServis';


function InterviewRole() {
    const dispatch = useDispatch();
    const myName = useSelector(state => state.myDetailsSlice.name);
    let nav = useNavigate();
    let seting = {
        job: "Software Developer",
        experience: "4",
        questions: 3
    }

    const startTheInterview = () => {
       console.log(checkSettingLocal()); 
    //    {
    //     "job" : "Software Developer",
    //     "experience" : "6",
    //     "questions" :3
    //  }
        // doApi(seting)
    };

    // const doApi = async (_dataBody) => {
    //     let url = API_URL + "/interviews";
    //     try {
    //         let resp = await doApiMethod(url, "POST", _dataBody);
    //         console.log(resp.data);
    //         if (resp.data._id) {
    //             dispatch(addNewIntervew({ newIntervew: resp.data }));
    //             nav("/Interview");
    //         }
    //     }
    //     catch (err) {
    //         console.log(err.response.data);
    //     }
    // }


    return (
        <>
            <section className="container flex justify-center mx-auto  flex-col w-[80%] lg:w-full items-center">
                <h1 className="text-center font-[Inter] text-2xl lg:text-xl font-bold text-[#2E3837]">Hello :{myName}</h1>
                <h2 className="text-center font-[Inter] text-2xl lg:text-xl font-bold text-[#2E3837]"> Before we start let's set some rules</h2>
                <h2 className="lg:text-start text-center font-[SM-Sans] font-bold text-xl text-bold text-[#2E3837]"> No phone</h2>
                <p className="text-lg  leading-tight text-red-400  sm:leading-tight lg:leading-tight font-serif mb-3">Don't use the answer phone or as a distraction, in fact put it aside</p>
                <h2 className="lg:text-start text-center font-[SM-Sans] font-bold text-xl text-bold text-[#2E3837]"> Without google and Chat Gpt</h2>
                <p className=" text-lg  leading-tight text-red-400  sm:leading-tight lg:leading-tight font-[simple] mb-3">Don't fool yourself you are here to do a professional interview</p>
                <h2 className="lg:text-start text-center font-[SM-Sans] font-bold text-xl text-bold text-[#2E3837]">Be clear</h2>
                <p className=" text-lg  leading-tight text-red-400  sm:leading-tight lg:leading-tight font-[simple] mb-3">Give clear answers and be confident</p>
                <h2 className=" text-center font-[SM-Sans] font-bold text-xl  text-[#2E3837]">Professional tip</h2>
                <h3 className=" text-center font-[SM-Sans]  text-xl font-semibold text-[#2E3837]">Don't forget to breathe</h3>
                <button onClick={startTheInterview} className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-3 py-3 font-[simple] mt-5">Start</button>
            </section >
        </>
    )
}

export default InterviewRole