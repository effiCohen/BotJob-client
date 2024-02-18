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
        </>
    );
}
export default Welcome;