import React from "react";
import 'tailwindcss/tailwind.css';
import { Carousel, IconButton } from "@material-tailwind/react";
import { Card, CardHeader, CardBody, Typography, Avatar } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';




function Welcome() {
    let nav = useNavigate();
    const toSignUp = () => {
        nav("/signup");
    };
    const toLogin = () => {
        nav("/login");
    };
    function StarIcon() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-700"
            >
                <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }

    return (
               <>
            <section className="relative py-16 lg:py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
                    <div className="flex-shrink-0 w-full lg:w-1/2 mb-10 lg:mb-0">
                        <img className="w-3/4 lg:w-full mx-auto lg:mx-0" src="src/assets/Rehearse.svg" alt="BotJob Ai Logo" />
                    </div>
                    <div className="text-center lg:text-left lg:w-1/2">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">BotJob Ai</h1>
                        <p className="text-gray-500 text-lg mb-6">Now your interviews are in one place and always under control</p>
                        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                            <button onClick={toLogin} className="btn btn-primary lg:mr-4 mb-2 lg:mb-0">Login</button>
                            <button onClick={toSignUp} className="btn btn-secondary">Create account</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl mx-auto mt-10">
                    <Carousel
                        autoPlay={true}
                        interval={5000}
                        infiniteLoop={true}
                        showIndicators={false}
                        showThumbs={false}
                        showStatus={false}
                        showArrows={true}
                        swipeable={true}
                        stopOnHover={true}
                        dynamicHeight={true}
                    >
                        {/* Add your Carousel cards here */}
                    </Carousel>
                </div>
            </section>
            <section className="relative block px-6 md:py-20 md:px-10  border-neutral-900 rounded-2xl">


                        <div className="relative mx-auto max-w-5xl text-center">
                            <span className="text-black my-3 flex items-center justify-center font-[Inter] uppercase tracking-wider">
                                Why choose us
                            </span>
                            <h2
                                className="block w-full font-[Inter]  text-black font-bold text-3xl sm:text-4xl">
                                Build a Website That Your customers love
                            </h2>
                            <p
                                className="mx-auto my-4 w-full max-w-xl  text-center font-[Inter] leading-relaxed tracking-wide text-black">
                                Our templates allow for maximum customization.
                                No technical skills required – our intuitive design tools
                                let you get the job done easily.
                            </p>

                        </div>
                        <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0">
                            <div className="w-full">
                                <div className="flex flex-col w-full mb-10 sm:flex-row">
                                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-blue-gray-800 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-black rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <h3 className="my-2 font-[Inter] ml-3 text-lg  text-gray-800">Development</h3>
                                                </div>
                                                <p className="mt-3 mb-1 text-xs font-[Inter] text-indigo-500 uppercase">------------</p>
                                                <p className="mb-2 text-gray-600">A decentralized application (dapp) is an application built on a
                                                    decentralized network that combines a smart contract and a frontend user interface.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <div className="relative h-full ml-0 md:mr-10">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <h3 className="my-2 ml-3 text-lg font-[Inter] text-gray-800">Web 3.0 Development</h3>
                                                </div>
                                                <p className="mt-3 mb-1 text-xs font-[Inter] text-black uppercase">------------</p>
                                                <p className="mb-2 text-gray-600">Web 3.0 is the third generation of Internet services that will
                                                    focus on understanding and analyzing data to provide a semantic web.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col w-full mb-5 sm:flex-row">
                                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-gray-900 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <h3 className="my-2 ml-3 text-lg font-[Inter] text-gray-800">Project Audit</h3>
                                                </div>
                                                <p className="mt-3 mb-1 text-xs font-[Inter] text-blue-400 uppercase">------------</p>
                                                <p className="mb-2 text-gray-600">A Project Audit is a formal review of a project, which is intended
                                                    to assess the extent up to which project management standards are being upheld.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
                                        <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-800 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-gray-700 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <h3 className="my-2 ml-3 text-lg font-[Inter] text-gray-800">Hacking / RE</h3>
                                                </div>
                                                <p className="mt-3 mb-1 text-xs font-[Inter] text-yellow-400 uppercase">------------</p>
                                                <p className="mb-2 text-gray-600">A security hacker is someone who explores methods for breaching
                                                    defenses and exploiting weaknesses in a computer system or network.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full sm:w-1/2">
                                        <div className="relative h-full ml-0 md:mr-10">
                                            <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gray-700 rounded-lg"></span>
                                            <div className="relative h-full p-5 bg-white border-2 border-gray-800 rounded-lg">
                                                <div className="flex items-center -mt-1">
                                                    <h3 className="my-2 ml-3 text-lg font-[Inter] text-gray-800">Bot/Script Development</h3>
                                                </div>
                                                <p className="mt-3 mb-1 text-xs font-[Inter] text-green-500 uppercase">------------</p>
                                                <p className="mb-2 text-gray-600">Bot development frameworks were created as advanced software tools
                                                    that eliminate a large amount of manual work and accelerate the development process.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >

            <footer className="bg-gray-900 text-white py-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-lg">&copy; 2024 BotJob team. All rights reserved.</p>
                </div>
            </footer>
        </>

    );
}
export default Welcome;