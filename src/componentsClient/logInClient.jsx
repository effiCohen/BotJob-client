import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiMethod } from '../services/apiService';
import { saveTokenLocal } from '../services/localService';
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiLockOutline } from '@mdi/js';


const loginClient = () => {
  let nav = useNavigate();
  let { register, handleSubmit, formState: { errors } } = useForm();

  const onSubForm = (data) => {
    console.log(data);
    doApi(data);
  }

  const doApi = async (_dataBody) => {
    let url = API_URL + "/users/login";
    try {
      let resp = await doApiMethod(url, "POST", _dataBody);
      if (resp.data.token) {
        saveTokenLocal(resp.data.token);
        nav("/home");
        window.location.reload();

      }
    }
    catch (err) {
      console.log(err.response.data);
    }
  }

  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  });
  let passwordRef = register("password", { required: true, minLength: 3 });

  const toSignUp = () => {
    nav("/signup");
  };
  const toforgatPass = () => {
    nav("/forgatPass");
  };

  return (

    <div className="min-w-screen min-h-fit  flex items-center justify-center p-5 ">
      <div className="w-full  " style={{ maxWidth: '1000px' }}>
        <h1 className="font-[SM-Sans] text-2xl text-[#2E3837]"> <b>Log In</b></h1>
        <div className="md:flex  items-center justify-center w-full px-5">
          <form onSubmit={handleSubmit(onSubForm)} className="md:w-96   md:px-10 ">
            <div className="flex items-center justify-center ">
              <div className="w-full sm:w-64 px-1 mb-2 text-start">
                <label className="text-xs font-semibold px-1">Email:</label>
                <div className="flex items-center justify-center">
                  <div className="w-10 z-10 pl-0  pointer-events-none flex items-center justify-center"><Icon path={mdiEmailOutline} size={0.7} /> </div>
                  <input {...emailRef} type="email" className="w-full text-start text-sm -ml-10 pl-10 pr-3 py-1 bg-[#FAF7FF] rounded-xl border-2 border-[#292930c6] outline-none focus:border-gray-400 font-[Poppins] text-black" placeholder="JohenDue@gmail.com" />
                </div>
                {errors.email ? <small className='text-red-700'>* Email invalid</small> : ""}
              </div>
            </div>
            <div className="  flex items-center justify-center">
              <div className="w-full sm:w-64 px-1 mb-2 text-start">
                <label className="text-xs font-semibold px-1"> Password:</label>
                <div className="flex items-center justify-center">
                  <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><Icon path={mdiLockOutline} size={0.7} /></div>
                  <input {...passwordRef} type="password" className="w-full -ml-10 pl-10 pr-3 text-sm text-start py-1 rounded-xl border-2   border-[#292930] bg-[#FAF7FF] outline-none focus:border-gray-500 font-[Poppins] " placeholder="password." />
                </div>
                {errors.password ? <small className='text-red-700'>* Enter valid password, min 3 chars</small> : ""}
                <p onClick={toforgatPass} className='text-red-700 text-end text-xs cursor-pointer'>Forgot password?</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-[50%]">
                <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] mt-5">Log in</button>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-5">
              <hr className="w-[90%] border border-[#D8DADC] border-1" />
              <div className="font-semibold  text-[#2E3837]">OR</div>
              <hr className="w-full border border-[#D8DADC] border-1" />
            </div>
          </form>

        </div>
        <button onClick={toSignUp} className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-3 py-3 font-[simple] mt-5">Create an Account</button>
      </div>
    </div >
  )
}

export default loginClient