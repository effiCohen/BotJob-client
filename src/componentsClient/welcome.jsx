import React from "react";
import 'tailwindcss/tailwind.css';



function Welcome() {
    return (
        <>
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

            <footer className="relative bg-sky-700 pt-6 pb-6">
        <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20" style={{ transform: "translateZ(0)" }}>
          <svg className="absolute bottom-0 overflow-hidden text-sky-700" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon className="fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-3">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-6">
              <div className="mt-2 lg:mb-0 mb-3">
                <button
                  className="outline-none focus:outline-none"
                  type="button"
                >
                  <img
                    src="/src/assets/img/twitter-original.svg"
                    alt="Twitter"
                    className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full mr-2"
                  />
                </button>
                <button
                  className="outline-none focus:outline-none"
                  type="button"
                >
                  <img
                    src="/src/assets/img/facebook.svg"
                    alt="Facebook"
                    className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full mr-2"
                  />
                </button>
                <button
                  className="outline-none focus:outline-none"
                  type="button"
                >
                  <img
                    src="/src/assets/img/google.svg"
                    alt="Google"
                    className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full mr-2"
                  />
                </button>
                <button
                  className="outline-none focus:outline-none"
                  type="button"
                >
                  <img
                    src="/src/assets/img/github.svg"
                    alt="GitHub"
                    className="bg-white shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full mr-2"
                  />
                </button>
              </div>
            </div>           
          </div>
        </div>
      </footer>
        </>
    );
}
export default Welcome;
