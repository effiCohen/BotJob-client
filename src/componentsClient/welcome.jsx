import React from "react";
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';



function Welcome() {
    let nav = useNavigate();
    const toSignUp = () => {
        nav("/signup");
    };
    const toLogin = () => {
        nav("/login");
    };
    return (
        <>
            <section className="relative py-12 sm:py-16 lg:py-20 bg-[#FFFDFB]   ">
                <div className="px-4 mx-auto max-w-6xl  lg:px-8 sm:flex sm:flex-col ">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-10 ">
                        <div>
                            <div className="text-center lg:text-start justify-between">

                                <h1 className="text-center text-[34px] font-bold  text-gray-900   font-[inter]">BotJob  Ai</h1>
                                <p className="text-gray-400 text-sm font-[Poppins] text-center ">Now your interviews are in one place and always under control</p>
                                <div className="flex justify-center  items-center lg:flex-col p-2 flex-col ">
                                    <div className="w-[50%] m-1">
                                        <button onClick={toLogin} className="block w-[80%]  m-1 mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] ">Login</button>
                                    </div>
                                    <div className="w-[50%]">
                                        <button onClick={toSignUp} className="block w-[80%]  mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] ">Create an Account</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center   lg:justify-start ">
                            </div>
                        </div>
                        <div>
                            <img className="lg:w-[45%] w-[50%] mx-auto bg-white lg" src="/src/assets/newLogo (2).jpg" alt="" />
                        </div>
                    </div>


                </div>

            </section >
            <footer className="text-center flex items-center mx-auto">

                <div className="mx-auto    rounded-3xl flex flex-col items-center justify-center text-center w-[80%]  ">
                    <div className="flex flex-col  justify-center  item-center    ">
                        <span className="text-sm text-[#2E3837] text-center  sm:text-center lg:p-1 p-2">© 2023 <b >BotJob™</b>. All Rights Reserved.
                        </span>
                        <button className="flex gap-3 cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                            <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path fill="#FFFFFF" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                            To BotJob GitHub</button>
                    </div>

                </div>

            </footer >


        </>


    );
}
export default Welcome;