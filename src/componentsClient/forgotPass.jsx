// import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { API_URL, doApiMethod } from '../services/apiService';
import {  useDispatch, useSelector } from "react-redux";
import { addEmail } from '../featuers/myDetailsSlice';
import { toast } from 'react-toastify';


const ForgotPass = () => {
    let nav = useNavigate();
    let { register, handleSubmit, formState: { errors } } = useForm();
    const myEmail = useSelector(state => state.myDetailsSlice.email);
    const dispatch = useDispatch();

    const onSubForm = (data) => {
        data.email = data.email.toLowerCase();
        console.log(data);
        doApi(data);
    }
  

    const doApi = async (_dataBody) => {
        let url = API_URL + "/users/forgotpass";
        try {
            let resp = await doApiMethod(url, "PATCH", _dataBody);
            if (resp.data.status = 200) {
                console.log("We will send you a password recovery code to your email");
                toast.success("We will send you a password recovery code to your email");
                dispatch(addEmail({email:_dataBody.email}));
                console.log(myEmail);
                nav("/passwordValidation");
                // window.location.reload();
            }
        }
        catch (err) {
            console.log(err.response);
        }
    }

    let emailRef = register("email", {
        required: true,
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    });

    const toLogin = () => {
        nav("/login");
    };

    return (
        <div className="min-w-screen min-h-fit rounded-3xl   flex items-center justify-center px-2 py-2 bg-[#FFFDFB]  ">
            <div className="   w-full overflow-hidden flex items-center justify-center " style={{ maxWidth: '1000px' }}>
                <div className="md:flex  w-full flex items-center justify-center">
                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-4">
                            <h1 className="font-bold text-3xl text-[#1E1E1E] font-[inter]">Forgot password?</h1>
                            <p className='text-gray-400 text-sm font-[inter] text-center mt-3'>Don’t worry, Please enter your email account.</p>
                        </div>
                        <form onSubmit={handleSubmit(onSubForm)} className="flex-mx-3">
                            <div className="w-full px-3 mb-2 text-start">
                                <label className="text-xs font-[inter] px-1 font-bold  text-[#292930] ">Email:</label>
                                <div className="flex">
                                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className=" text-gray-400 text-lg"></i></div>
                                    <input {...emailRef} type="email" className="w-full -ml-10 pl-10 pr-3 py-1 bg-[#FAF7FF] rounded-xl text-sm border-2 border-[#292930c6] outline-none focus:border-gray-400 mt-2" placeholder="test@gmail.com" />
                                </div>
                                {errors.email ? <small className='text-red-700'>* Email invalid</small> : ""}
                                <div className="w-full px-3 mt-5 ">
                                    <button className="block w-[90%] max-w-xs mx-auto bg-[#3871C1] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold  text-white rounded-2xl px-3 py-3 font-[simple]">Send code</button>
                                </div>
                                
                            </div>
                            <p className='mx-auto text-center mt-8 font-[simple]'>Already have account? <b onClick={toLogin} className='cursor-pointer'>Sign in </b></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ForgotPass