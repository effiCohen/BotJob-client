// import React from 'react'

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiMethod } from '../services/apiService';
import { toast } from 'react-toastify';

const RestPassword = () => {
    const navigate = useNavigate();
    const myEmail = useSelector(state => state.myDetailsSlice.email);

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Password validation
        const errors = {};
        if (!password) {
            errors.password = 'Password is required';
        }
        if (!confirmPassword) {
            errors.confirmPassword = 'Confirm Password is required';
        }
        if (password !== confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        // Send password to server
        doApi()
    };
    const doApi = async () => {
        let url = API_URL + "/users/changePass";
        try {
            let resp = await doApiMethod(url, "PATCH", { email: myEmail, password });
            if (resp.data.status = 200) {
                toast.success('Password reset successfully');
                navigate('/login');
            }
        }
        catch (err) {
            console.log(err.response.data);
        }
    }

    return (
        <div className="min-w-screen min-h-fit rounded-3xl flex items-center justify-center px-2 py-2 bg-[#FAF7FF]">
            <div className=" bg-transparent flex-col mx-auto rounded-3xl shadow-md  p-4 border border-gray-300 flex w-full justify-center bg-white  mt-16  lg:w-[55%] ">

                <div className="w-full overflow-hidden flex items-center justify-center">
                    <div className="md:flex w-full flex items-center justify-center">
                        <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                            <div className="text-center mb-4">
                                <h1 className="text-center text-4xl lg:text-[34px] text-black font-[Inter] bg-[#FFFDFB] m-5">Reset password</h1>
                                <p className="text-gray-400 text-sm font-[inter] text-center mt-3">Please type something you’ll remember</p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex-mx-3">
                                    <div className="w-full px-3 mb-2 text-start ">
                                        <div className='m-3 '>
                                            <label className="text-sm font-[Inter] px-1 text-[#292930] m-1">New password</label>
                                            <div className="flex">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                                <input
                                                    type="password"
                                                    value={password}
                                                    onChange={handlePasswordChange}
                                                    className="w-full -ml-10 pl-10 pr-3 py-1 text-black bg-white rounded-xl text-sm border-2 border-[#292930c6] outline-none focus:border-gray-400"
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </div>
                                        {errors.password && <small className="text-red-700">{errors.password}</small>}
                                        <div className='m-3'>
                                            <label className="text-sm font-[Inter] px-1 text-[#292930] m-1">Confirm new password</label>
                                            <div className="flex ">
                                                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                                <input
                                                    type="password"
                                                    value={confirmPassword}
                                                    onChange={handleConfirmPasswordChange}
                                                    className="w-full -ml-10 pl-10 pr-3 py-1 bg-white text-black rounded-xl text-sm border-2 border-[#292930c6] outline-none focus:border-gray-400"
                                                    placeholder="Confirm Password"
                                                />
                                            </div>
                                        </div>
                                        {errors.confirmPassword && <small className="text-red-700">{errors.confirmPassword}</small>}
                                        <div className="w-full px-3 mt-5">
                                            <button type="submit" className="block w-[90%]  mx-auto  bg-[#3871C1] hover:bg-[#ffcad4a6] hover:text-[#2E3837] font-[Inter] text-white rounded-2xl px-3 py-3 ">Confirm Password</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestPassword;

