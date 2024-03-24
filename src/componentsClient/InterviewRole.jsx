import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_URL, doApiMethod } from '../services/apiService';
import { addNewIntervew } from '../featuers/newIntervewSlice';
import { checkSettingLocal } from '../services/settingServis';
import { toast } from 'react-toastify';
import Spinner from "../Spinner";
import Lottie from 'react-lottie';
import lottieJson from '../assets/z9LLOpaVwt (3).json'

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
            console.log(resp);
            if (resp.data._id) {
                dispatch(addNewIntervew({ newIntervew: resp.data }));
                nav("/Interview");
            } else {
                setLoading(false);
                toast.error("There was a problem, please try again later")
            }
        } catch (err) {
            console.log(err.response.data);
            setLoading(false);
        }
    }

    return (
        <>
            <h1 className=" mt-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-[Inter] m-2 text-center mx-auto">Hello {myName}</h1>
            <section className="container flex justify-center mx-auto flex-col lg:flex-row-reverse items-center w-[80%] lg:w-full">
                {loading && (
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-opacity-50 bg-[#ffffff00]">
                        <Spinner />
                    </div>
                )}

               
                <div className='flex  items-center  justify-between'>
                    <div></div>

                    <div className="w-full lg:w-[50%] text-left lg:text-left m-12">
                        <h2 className="text-left font-[Inter] text-2xl lg:text-xl font-bold text-[#2E3837] mt-2">Before we start let's set some rules</h2>
                        <ul className='m-2' >
                            <li className='flex items-start'> {/* Flex container with items-start aligns children to the start of the cross axis */}
                                <span className="mr-2">&#8226;</span> {/* Dot character */}
                                <h2 className="text-left font-[Inter] font-bold text-xl text-bold text-[#2E3837]">
                                    No phone
                                    <img src="/src/assets/no-phone.png" alt="Icon" className="inline-block w-6 h-6 mx-2" />
                                </h2>
                            </li>
                            <li className='flex items-start'> {/* Flex container with items-start aligns children to the start of the cross axis */}
                                <span className="mr-2">&#8226;</span> {/* Dot character */}
                                <h2 className="text-left font-[Inter] font-bold text-xl text-bold text-[#2E3837]">
                                    Without Google
                                    <img src="/src/assets/google1.png" alt="Google Icon" className="inline-block w-6 h-6 mx-2" />
                                </h2>
                            </li>
                            <li className='flex items-start'> {/* Flex container with items-start aligns children to the start of the cross axis */}
                                <span className="mr-2">&#8226;</span> {/* Dot character */}
                                <h2 className="text-left font-[Inter] font-bold text-xl text-bold text-[#2E3837]">
                                    Without chat
                                    <img src="/src/assets/artificial-intelligence.png" alt="Chat GPT Icon" className="inline-block w-6 h-6 mx-2" />
                                </h2>
                            </li>
                            <li className='flex items-start'> {/* Flex container with items-start aligns children to the start of the cross axis */}
                                <span className="mr-2">&#8226;</span> {/* Dot character */}
                                <h2 className="text-left font-[Inter] font-bold text-xl text-bold text-[#2E3837]">
                                    Be clear
                                    <img src="/src/assets/pencil.png" alt="Chat GPT Icon" className="inline-block w-6 h-6 mx-2" />
                                </h2>
                            </li>
                            <li className='flex items-start'> {/* Flex container with items-start aligns children to the start of the cross axis */}
                                <span className="mr-2">&#8226;</span> {/* Dot character */}
                                <h2 className="text-left font-[Inter] text-xl font-semibold text-[#2E3837]">
                                    Don't forget to breathe
                                    <img src="/src/assets/difficulty-breathing.png" alt="Chat GPT Icon" className="inline-block w-6 h-6 mx-2" />
                                </h2>
                            </li>
                            <li className='flex items-start'> {/* Flex container with items-start aligns children to the start of the cross axis */}
                                <span className="mr-2">&#8226;</span> {/* Dot character */}
                                <h2 className="text-left font-[Inter] text-xl font-semibold text-[#2E3837]">
                                    Stopwatch activat for test precision
                                    <img src="/src/assets/clock.png" alt="Chat GPT Icon" className="inline-block w-6 h-6 mx-2" />
                                </h2>
                            </li>
                        </ul>


                        <button onClick={startTheInterview} className="font-[Inter] bg-[#ffafcc] w-full lg:w-[70%] h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-700 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#ffafcc] before:to-[#ffafcc] before:transition-all before:duration-700 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#ffffff] hover:text-[#ebf7ff] mt-5"> Start</button>

                    </div>
                    <div className="w-full lg:w-[50%]">
                        {/* <img src="/src/assets/20945347.jpg" className="w-full" /> */}
                        <Lottie options={{ loop: true, autoplay: true, animationData: lottieJson }} height={500} width={500} />

                    </div>

                </div>

            </section>

            <div className="flex flex-col items-center">
                <p className='font-bold m-1 font-[Inter]' style={{ position: 'relative', top: '-40px' }}> Andy Warhol </p>
                <p className='font-bold font-[Inter] mt-2 text-1.5xl' style={{ position: 'relative', top: '-40px' }}> "They say time changes things but actually you have to change them yourself" </p>
            </div>




        </>
    )
}

export default InterviewRole;
