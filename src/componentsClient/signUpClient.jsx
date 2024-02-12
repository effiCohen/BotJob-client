// import React from 'react'

import { useForm } from 'react-hook-form'

function SignUpClient() {
  const { register, formState: { errors } } = useForm()
  const emailReg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  const nameRegex = /^[a-zA-Z\s]+$/;
  return (
    <>
      <div className="min-w-screen min-h-fit rounded-3xl   flex items-center justify-center px-2 py-2 bg-[#FFFDFB]  ">
        <div className="   w-full overflow-hidden flex items-center justify-center    " style={{ maxWidth: '1000px' }}>
          <form className="md:flex  w-full flex items-center justify-center">

            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-4">
                <h1 className="font-bold text-3xl text-gray-900 font-[DM-Sans]">Sign Up to BotJob.</h1>
                <p className='text-gray-300 text-sm font-[simple]  pr-[110px]'>Enter your detail below</p>
              </div>
              <div>

                <div className="flex-mx-3">
                  <div className="w-full px-3 mb-2 text-start">
                    <label className="text-xs font-sans px-1 font-bold text-[#292930] ">Full Name:</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className=" text-gray-400 text-lg"></i></div>
                      <input {...register('fullName', { required: { value: true, message: 'First name is required...' }, maxLength: { value: 20, message: 'First name less than 20 characters ' }, pattern: { value: nameRegex, message: 'Invalid first name' } })} type="text" className="w-full -ml-10 pl-10 pr-3 py-1 bg-[#FAF7FF] rounded-xl text-sm border-2 border-[#292930c6] outline-none focus:border-gray-400" placeholder="Johen Due" />
                    </div>
                    {errors.email && <p className="text-red-500">{errors.fullName.message}</p>}

                  </div>
                </div>
                <div className="flex-mx-3">
                  <div className="w-full px-3 mb-2 text-start">
                    <label className="text-xs font-sans px-1 font-bold text-[#292930]">Email:</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                      <input {...register('email', { required: { value: true, message: 'Email is required...' }, pattern: { value: emailReg, message: 'Invalid email...' } })} type="email" className="w-full -ml-10 pl-10 pr-3 py-1 rounded-xl text-sm  border-2 border-[#292930]  bg-[#FAF7FF] outline-none focus:border-gray-500" placeholder="dashui18@gmail.com" />
                    </div>
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                  </div>
                </div>

                <div className="flex-mx-3">
                  <div className="w-full px-3 mb-2 text-start">
                    <label className="text-xs font-sans px-1 font-bold text-[#292930]">password:</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                      <input {...register('password', { required: { value: true, message: 'Password is required...' }, minLength: { value: 6, message: 'Password at least 6 characters' }, maxLength: { value: 25, message: 'Password less than 25 characters ' } })} type="password" className="w-full -ml-10 pl-10 pr-3 text-sm py-1 rounded-xl border-2   border-[#292930] bg-[#FAF7FF] outline-none focus:border-gray-500 text-left" placeholder="password              ....." />
                    </div>
                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                  </div>

                </div>
                <div className="flex-mx-3">
                  <div className="w-full px-3 mb-2 text-start">
                    <label className="text-xs font-sans px-1 font-bold text-[#292930]">Date of birth:</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                      <input {...register('date', { required: { value: true, message: 'date is required...' }, })} type="date" className="w-full -ml-10 pl-10 text-sm   py-1 text-left rounded-xl border-2 gap-10    border-[#292930] bg-[#FAF7FF] outline-none focus:border-gray-500" />
                    </div>
                    {errors.password && <p className="text-red-500">{errors.date.message}</p>}

                  </div>

                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mt-5">
                    <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-3 py-3 font-[simple]">Create an Account</button>
                    <p className='mx-auto text-center mt-8 font-[simple]'>Already have an account? <b className='cursor-pointer'>Sign in </b></p>
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