// import React from 'react';
import { useNavigate } from 'react-router';
const ForgatPass = () => {
    let nav = useNavigate();

    const toLogin = () => {
        nav("/login");
    };
    return (
        <div className="min-w-screen min-h-fit rounded-3xl   flex items-center justify-center px-2 py-2 bg-[#FFFDFB]  ">
            <div className="   w-full overflow-hidden flex items-center justify-center " style={{ maxWidth: '1000px' }}>
                <div className="md:flex  w-full flex items-center justify-center">

                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-4">
                            <h1 className="font-bold text-3xl text-[#1E1E1E] font-[DM-Sans]">Forgot password?</h1>
                            <p className='text-gray-300 text-sm font-[simple] text-center'>Don’t worry! It happens. Please enter the email associated with your account.</p>
                        </div>
                        <div>

                            <div className="flex-mx-3">
                                <div className="w-full px-3 mb-2 text-start">
                                    <label className="text-xs font-sans px-1 font-bold text-[#292930] ">Email:</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className=" text-gray-400 text-lg"></i></div>
                                        <input type="text" className="w-full -ml-10 pl-10 pr-3 py-1 bg-[#FAF7FF] rounded-xl text-sm border-2 border-[#292930c6] outline-none focus:border-gray-400" placeholder="JohenDue@gmail.com" />
                                    </div>

                                    <div className="w-full px-3 mt-5 ">
                                        <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-3 py-3 font-[simple]">Send code</button>
                                    </div>
                                    <p className='mx-auto text-center mt-8 font-[simple]'>Already have an account? <b onClick={toLogin} className='cursor-pointer'>Sign in </b></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default ForgatPass