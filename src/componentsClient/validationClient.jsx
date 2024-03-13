// import React from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL, doApiMethod } from '../services/apiService';
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


function ValidationClient() {
  let nav = useNavigate();
  let { register, handleSubmit, formState: { errors } } = useForm();
  const myEmail = useSelector(state => state.myDetailsSlice.email);




  const send = (data) => {
    let myCode = data.code1 + data.code2 + data.code3 + data.code4 + data.code5;
    let myData = {
      email: myEmail,
      verifictionCode: myCode
    };
    console.log(myData);
    doApi(myData);
  }

  const doApi = async (_dataBody) => {
    let url = API_URL + "/users/verification";
    try {
      let resp = await doApiMethod(url, "PATCH", _dataBody);
      console.log(resp);
      if (resp.data.status = 200) {
        console.log("You are now a valid user");
        toast.success("You are now a valid user");
        nav("/login");
      }
    }
    catch (err) {
      console.log(err.response.data);
    }
  }

  let codeRef1 = register("code1", { required: true, minLength: 1, maxLength: 1 });
  let codeRef2 = register("code2", { required: true, minLength: 1, maxLength: 1 });
  let codeRef3 = register("code3", { required: true, minLength: 1, maxLength: 1 });
  let codeRef4 = register("code4", { required: true, minLength: 1, maxLength: 1 });
  let codeRef5 = register("code5", { required: true, minLength: 1, maxLength: 1 });


  return (
    <>

      <div className="  flex  flex-col items-center justify-between overflow-hidden container bg-[#fffdfbfa] ">
        <h1 className="text-center text-[34px] font-[Poppins] bg-[#FFFDFB]  "> Let’s go! </h1>

        <figure >
          <img src="/src/assets/Asset@2x-8 1.png" alt="email@ " className='h-[15%] w-[25%] mx-auto max-w-lg   ' />
        </figure>
        <form onSubmit={handleSubmit(send)} className="max-w-xl px-5 text-center flex flex-col  items-center justify-center mb-auto  ">
          <h1 className='font-bolt font-[inter] text-[30px]'>we just emailed you.</h1>
          <p className=" text-lg text-zinc-500 font-[Poppins]"> We’ve sent an Email with an activation code to your mail <span className="font-extrabold text-[#141414]">{myEmail}</span>.</p>
          <div className="flex gap-5 max-w-lg items-end">
            {/* {inputFields.map((inputField, index) => (
              <div key={index}>{inputField}</div>
               
            ))} */}
            <input {...codeRef1} type="text" className="w-10 h-10 flex items-center text-center text-black text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg" />
            <input {...codeRef2} type="text" className="w-10 h-10 flex items-center text-center text-black text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg" />
            <input {...codeRef3} type="text" className="w-10 h-10 flex items-center text-center text-black text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg" />
            <input {...codeRef4} type="text" className="w-10 h-10 flex items-center text-center text-black text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg" />
            <input {...codeRef5} type="text" className="w-10 h-10 flex items-center text-center text-black text-base border-2 border-gray-300 focus:border-[#141414] outline-none rounded-lg" />
          </div>
          {errors.code1 ? <small className='text-red-700'>The first number is invalid</small> : ""}
          {errors.code2 ? <small className='text-red-700'>The second number is invalid</small> : ""}
          {errors.code3 ? <small className='text-red-700'>The third number is invalid</small> : ""}
          {errors.code4 ? <small className='text-red-700'>The fourth number is invalid</small> : ""}
          {errors.code5 ? <small className='text-red-700'>The last number is invalid</small> : ""}
          <div className="flex">
            <div className=" px-3 mt-5 text-center">
              <button className="block w-[95%]  bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837]  text-white rounded-2xl px-3 py-3 font-bold font-[simple] ">Verify</button>
            </div>
          </div>
        </form>


      </div>

    </>
  )
}

export default ValidationClient