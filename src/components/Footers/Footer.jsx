import React from "react";

export default function Footer() {
  return (
    <>
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
