// import React from 'react'

function Welcome() {
    return (
        <div className="relative bg-gray-50">
        <section className="relative py-12 sm:py-16 lg:py-20 lg:pb-36 bg-white">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-8">
                    <div>
                        <div className="text-center lg:text-left">
                            <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">BotJOB  AI</h1>
                            <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">Now your interviews are in one place and always under control.</p>
                            <div className="mt-8 text-center" style={{ transform: 'scale(1.2, 1.2)' }}>

                                <a
                                    href="auth/Login"
                                    target="_blank"
                                    className="get-started text-white font-bold px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 bg-sky-500	 active:bg-sky-500	 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150 mt-4" // הוספת מרווח מצוין למעלה
                                >
                                    Login
                                </a>
                                <a
                                    href="auth/Register"
                                    className="github-star ml-1 text-white font-bold px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1  bg-cyan-950	 active:bg-cyan-950	 uppercase text-xs shadow hover:shadow-lg ease-linear transition-all duration-150 mt-4" // הוספת מרווח מצוין למעלה
                                    target="_blank"
                                >
                                    Create an Account
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-10 space-x-6 lg:justify-start sm:space-x-8">
                        </div>
                    </div>

                    <div>

                        <img className="w-full bg-white" src="/src/assets/img/logo4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
  }
  
  export default Welcome