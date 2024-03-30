// import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL, doApiMethod } from '../services/apiService';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const PasswordValid = () => {
    let nav = useNavigate();
    let { register, handleSubmit, formState: { errors } } = useForm();
    const myEmail = useSelector(state => state.myDetailsSlice.email);


    const send = (data) => {
        let myCode = data.code1 + data.code2 + data.code3 + data.code4 + data.code5;
        let myData = {
            email: myEmail,
            validationCode: myCode
        };
        console.log(myData);
        doApi(myData);
    }

    const doApi = async (_dataBody) => {
        let url = API_URL + "/users/validation";
        try {
            let resp = await doApiMethod(url, "PATCH", _dataBody);
            console.log(resp);
            if (resp.data.status = 200) {
                toast.success("Verified user");
                console.log("Verified user");
                nav("/restpass");
            }
        }
        catch (err) {
            console.log(err.response.data);
        }
    }

    let codeRefs = [
        register("code1", { required: true, minLength: 1, maxLength: 1 }),
        register("code2", { required: true, minLength: 1, maxLength: 1 }),
        register("code3", { required: true, minLength: 1, maxLength: 1 }),
        register("code4", { required: true, minLength: 1, maxLength: 1 }),
        register("code5", { required: true, minLength: 1, maxLength: 1 })
    ];

    return (
        <>

            <div className=" flex   items-center self-center mx-auto  justify-between overflow-hidden container bg-[#fffdfbfa] px-5 ">
                <div className=" bg-transparent flex-col mx-auto rounded-3xl shadow-md  p-4 border border-gray-300 flex w-full justify-center  mt-16  lg:w-[55%] ">

                    <h1 className="text-center text-4xl lg:text-[34px] text-black font-[Inter] bg-[#FFFDFB] m-5  "> Let’s go! </h1>

                    <figure >
                        <img src="/src/assets/sendEmail.png" alt="email@ " className='lg:h-[20%] lg:w-[30%] size-40 mx-auto    ' />
                    </figure>
                    <form onSubmit={handleSubmit(send)} className=" text-center flex flex-col  items-center justify-center   ">
                        <h1 className='font-bolt font-[Inter] text-black  text-4xl lg:text-[30px]'>We just sent you an email.</h1>
                        <p className=" text-lg text-zinc-500"> We've sent Email with  activation code to your mail <span className="font-bold text-[#141414]">{myEmail}</span>.</p>
                        <div className="flex gap-5 max-w-lg items-end">
                            <div className="flex gap-5 max-w-lg items-end">
                                {[0, 1, 2, 3, 4].map((index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        className="w-10 h-10 flex items-center text-center bg-transparent text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg"
                                        {...codeRefs[index]}
                                    />
                                ))}
                            </div>
                        </div>
                        {errors.code1 ? <small className='text-red-700'>The first number is invalid</small> : ""}
                        {errors.code2 ? <small className='text-red-700'>The second number is invalid</small> : ""}
                        {errors.code3 ? <small className='text-red-700'>The third number is invalid</small> : ""}
                        {errors.code4 ? <small className='text-red-700'>The fourth number is invalid</small> : ""}
                        {errors.code5 ? <small className='text-red-700'>The last number is invalid</small> : ""}
                        <div className="flex">
                            <div className=" px-3 mt-5 text-center">
                                <button className="block w-[95%]  bg-[#3871C1] hover:bg-[#ffcad4a6] hover:text-[#2E3837]  text-white rounded-2xl px-3 py-3 font-bold font-[simple] ">Verify</button>
                            </div>
                        </div>
                    </form>



                </div >
            </div >

        </>
    )
}

export default PasswordValid