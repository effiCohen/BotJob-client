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
                <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36 bg-white">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
                            <div>
                                <div className="text-center lg:text-left">
                                    <h1 className="text-center text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">BotJob  Ai</h1>
                                    <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Now your interviews are in one place and always under control</p>
                                    <div className="flex justify-center mt-8">
                                        <div className="w-[25%]">
                                            <button onClick={toLogin} className="block w-[80%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">Login</button>
                                        </div>
                                        <div className="w-[60%]">
                                            <button onClick={toSignUp} className="block w-[80%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">Create an Account</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                                </div>
                            </div>
                            <div>
                                <img className="w-full bg-white" src="/src/assets/logo4.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="text-center flex items-center mx-auto">

                <div className="mx-auto    rounded-3xl flex flex-col items-center justify-center text-center w-[80%]  ">
                    <div className="flex flex-col  justify-center  item-center    ">
                        <span className="text-sm text-[#2E3837] text-center  sm:text-center lg:p-1 p-2">© 2023 <b >BotJob™</b>. All Rights Reserved.
                        </span>
                        <div className="bg-[#2E3837] rounded-2xl mx-auto  text-[#FFFDFB] w-1/3 p-1">
                            <a href="#">
                                <p>To BotJob GitHub</p>
                                <svg className="w-15 h-5 mx-auto   hover:text-blue-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                                </svg>

                            </a>
                        </div>

                    </div>

                </div>

            </footer >
            
        </>
    );
}
export default Welcome;