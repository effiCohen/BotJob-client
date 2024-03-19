// import React from 'react'

const RestPassword = () => {

    return (
        <div className="min-w-screen min-h-fit rounded-3xl   flex items-center justify-center px-2 py-2 bg-[#FFFDFB]  ">
            <div className="   w-full overflow-hidden flex items-center justify-center " style={{ maxWidth: '1000px' }}>
                <div className="md:flex  w-full flex items-center justify-center">

                    <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
                        <div className="text-center mb-4">
                            <h1 className="font-bold text-3xl text-[#1E1E1E] font-[inter]">Reset password</h1>
                            <p className='text-gray-300 text-sm font-[Poppins] text-center ml-6'>Please type something you’ll remember</p>
                        </div>
                        <div>

                            <div className="flex-mx-3">
                                <div className="w-full px-3 mb-2 text-start">
                                    <label className="text-xs font-[inter] px-1  text-[#292930] "> New password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input type="password" className="w-full -ml-10 pl-10 pr-3 py-1 bg-[#FAF7FF] rounded-xl text-sm border-2 border-[#292930c6] outline-none focus:border-gray-400" placeholder="Password" />
                                    </div>
                                    <label className="text-xs  px-1 font-[inter] text-[#292930] ">Confirm new password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input type="password" className="w-full -ml-10 pl-10 pr-3 py-1 bg-[#FAF7FF] rounded-xl text-sm border-2 border-[#292930c6] outline-none focus:border-gray-400" placeholder="Confirm Password" />
                                    </div>

                                    <div className="w-full px-3 mt-5 ">
                                        <button className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl px-3 py-3 font-[simple]">Confirm Password</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default RestPassword