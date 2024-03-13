// import React from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';
import { API_URL, doApiMethod } from '../services/apiService';
import { useDispatch } from "react-redux";
import { addEmail } from '../featuers/myDetailsSlice';
import { toast } from 'react-toastify';

function SignUpClient() {
  let nav = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubForm = (data) => {
    data.email = data.email.toLowerCase();
    console.log("data", data);
    doApi(data)
  };


  const doApi = async (_dataBody) => {
    let url = API_URL + "/users";
    try {
      let resp = await doApiMethod(url, "POST", _dataBody);
      console.log("resp", resp);
      if (resp.data._id) {
        dispatch(addEmail({ email: _dataBody.email }));
        toast.success("You sign up");
        console.log("You sign up");
        nav("/validation");
      }
    }
    catch (err) {
      toast.error(err);
      console.log(err.response.data);
    }
  };

  let firstNameRef = register("FirstName", { required: true, minLength: 2, maxLength: 20 });
  let lastNameRef = register("LastName", { required: true, minLength: 2, maxLength: 20 });
  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  });
  let passwordRef = register("password", { required: true, minLength: 4, maxLength: 20 });
  let dateRef = register("DateOfBirth", { required: true });

  const toLogin = () => {
    nav("/login");
  };

  return (
    <>
      <div className="min-w-screen min-h-fit rounded-3xl   flex items-center justify-center  bg-[#FFFDFB]  ">
        <div className="   w-full overflow-hidden flex items-center justify-center    " style={{ maxWidth: '1000px' }}>
          <form onSubmit={handleSubmit(onSubForm)} className="md:flex  w-full flex items-center justify-center">

            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center ">
                <h1 className="font-bold text-3xl text-gray-900 font-[inter]">Sign Up to BotJob.</h1>
                <p className='text-gray-300 text-sm font-[Poppins]  pr-[110px]'>Enter your detail below</p>
              </div>
              <div>

                <div className="flex-mx-3">
                  <div className="w-full px-3 mb-2 text-start">
                    <label className="text-xs font-[inter] px-1 font-bold text-[#292930] ">First Name:</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className=" text-gray-400 text-lg"></i></div>
                      <input {...firstNameRef} type="text" className="w-full -ml-10 pl-10 pr-3 py-1 bg-[#FAF7FF] rounded-xl text-sm border-2 border-[#292930c6] outline-none focus:border-gray-400" placeholder="Johen" />
                    </div>
                    {errors.FirstName ? <small className='text-red-500'>Enter valid Full Name, min 2 chars max 20</small> : ""}

                  </div>
                  <div className="w-full px-3 mb-2 text-start">
                    <label className="text-xs font-[inter] px-1 font-bold text-[#292930] ">Last Name:</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className=" text-gray-400 text-lg"></i></div>
                      <input {...lastNameRef} type="text" className="w-full -ml-10 pl-10 pr-3 py-1 bg-[#FAF7FF] rounded-xl text-sm border-2 border-[#292930c6] outline-none focus:border-gray-400" placeholder="Due" />
                    </div>
                    {errors.LastName ? <small className='text-red-500'>Enter valid Full Name, min 2 chars max 20</small> : ""}

                  </div>
                </div>
                <div className="flex-mx-3">
                  <div className="w-full px-3 mb-2 text-start">
                    <label className="text-xs font-[inter] px-1 font-bold text-[#292930]">Email:</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                      <input {...emailRef} type="email" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-xl text-sm  border-2 border-[#292930]  bg-[#FAF7FF] outline-none focus:border-gray-500" placeholder="test@gmail.com" />
                    </div>
                    {errors.email ? <small className='text-red-500'>Email invalid</small> : ""}

                  </div>
                </div>

                <div className="flex-mx-3">
                  <div className="w-full px-3 mb-2 text-start">
                    <label className="text-xs font-[inter] px-1 font-bold text-[#292930]">Password:</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                      <input  {...passwordRef} name='password' type="password" className="w-full -ml-10 pl-10 pr-3 text-sm py-1 rounded-xl border-2   border-[#292930] bg-[#FAF7FF] outline-none focus:border-gray-500 text-left" placeholder="password.              ....." />
                    </div>
                    {errors.password ? <small className='text-red-500'>* Enter valid password, min 4 chars</small> : ""}

                  </div>

                </div>
                <div className="flex-mx-3">
                  <div className="w-full px-3 mb-2 text-start">
                    <label className="text-xs font-[inter] px-1 font-bold text-[#292930]">Date of birth:</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                      <input {...dateRef} type="date" className="w-full -ml-10 pl-10 text-sm   py-1 text-left rounded-xl border-2 gap-10    border-[#292930] bg-[#FAF7FF] outline-none focus:border-gray-500" />
                    </div>
                    {errors.DateOfBirth ? <small className='text-red-500'>Missing date of birth</small> : ""}

                  </div>

                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mt-5">
                    <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-3 py-3 font-[simple]">Create an Account</button>
                    <p className='mx-auto text-center mt-8 font-[simple]'>Already have an account? <b onClick={toLogin} className='cursor-pointer'>Sign in </b></p>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

    </>
  )
}

export default SignUpClient