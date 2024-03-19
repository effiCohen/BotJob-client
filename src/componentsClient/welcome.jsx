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
     


        </>

    );
}
export default Welcome;