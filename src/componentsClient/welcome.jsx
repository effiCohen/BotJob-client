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
            <section className="relative py-16 lg:py-20 ">
                <div className="lg:max-w-3xl max-w-2xl p-4  mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-between rounded-3xl shadow-lg border border-gray-100">
                    <div className="flex-shrink-0 w-full lg:w-1/2  lg:mb-0">
                        <img className="w-3/4 lg:w-full mx-auto lg:mx-0" src="src/assets/Rehearse.svg" alt="BotJob Ai Logo" />
                    </div>
                    <div className="text-center lg:text-left lg:w-1/2 ">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Rehearse</h1>
                        <p className="text-gray-500 text-lg mb-6">Now you can practice the job interviews in one place and always be in control</p>
                        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start">
                            <button onClick={toLogin} className="btn hover:bg-[#ffafccc2] text-white border-none bg-[#ffafcc] lg:mr-4  mb-2 lg:mb-0">Login</button>
                            <button onClick={toSignUp} className="btn hover:bg-[#3871c1bc] text-white border-none bg-[#3871C1]">Create account</button>
                        </div>
                    </div>

                </div>
                <section className="px-6 md:py-20 md:px-10 rounded-xl mt-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl font-[Inter]">Why Choose Us</h2>
                        <p className="mt-7 font-[Inter] text-lg text-gray-700">Prepare for Your Next Job Interview with Confidence</p>
                    </div>
                    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
                        <div className="relative p-6 backdrop-blur-sm bg-white border border-gray-200 rounded-xl shadow-lg ">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Expert Interview Feedback</h3>
                            <p className="mb-4 text-sm text-gray-600">Get personalized feedback from industry experts to refine your interview skills.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Mock Interviews</h3>
                            <p className="mb-4 text-sm text-gray-600">Practice with simulated interviews tailored to your target industry and role.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Comprehensive Resources</h3>
                            <p className="mb-4 text-sm text-gray-600">Access a wide range of resources including interview guides, tips, and sample questions.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Real User Experiences</h3>
                            <p className="mb-4 text-sm text-gray-600">Hear success stories and insights from individuals who secured their dream jobs with our platform.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Tailored Learning Paths</h3>
                            <p className="mb-4 text-sm text-gray-600">Receive personalized recommendations and guidance to improve your interview performance.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">Save Your Progress</h3>
                            <p className="mb-4 text-sm text-gray-600">Track your interview preparation progress and access your history to monitor your improvement over time.</p>
                        </div>
                        <div className="relative p-6 bg-white border border-gray-200 rounded-xl shadow-lg">
                            <h3 className="mb-2 text-lg font-semibold text-gray-900">AI-Powered Insights</h3>
                            <p className="mb-4 text-sm text-gray-600">Leverage AI-driven analytics to gain valuable insights into your interview performance and areas for improvement.</p>
                        </div>
                    </div>

                </section>


                <div className="pb-5">
    <div className="container flex flex-col items-center justify-center w-full p-6 mx-auto mt-4 text-center xl:px-0">
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white font-[Inter]">Hear What Our Users Say</h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl font-[Inter]">Discover how our platform has transformed job interview preparation for our users.</p>
    </div>
    <div className="container p-6 mx-auto mb-10 xl:px-0">
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
            <div className="lg:col-span-2 xl:col-auto">
                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <p className="text-2xl leading-normal">"This platform provided me with invaluable insights and feedback that greatly enhanced my interview performance. I landed my dream job at Google thanks to the preparation I received here."</p>
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100" loading="lazy" />
                        </div>
                        <div>
                            <div className="text-lg font-medium">Sarah Steiner</div>
                            <div className="text-gray-600 dark:text-gray-400">VP Sales at Google</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <p className="text-2xl leading-normal ">“The interview simulations and expert feedback on this platform were instrumental in helping me gain confidence and refine my responses. I successfully secured a position at Netflix after using this platform.”</p>
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80" loading="lazy" />
                        </div>
                        <div>
                            <div className="text-lg font-medium">Dylan Ambrose</div>
                            <div className="text-gray-600 dark:text-gray-400">Lead Marketer at Netflix</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 dark:bg-gray-800 md:px-14 rounded-2xl md:py-14 dark:bg-trueGray-800">
                    <p className="text-2xl leading-normal">“Using this platform significantly improved my interview skills and gave me a competitive edge. The personalized feedback and AI-driven insights helped me secure multiple job offers. I highly recommend it!”</p>
                    <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                            <img alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80" loading="lazy" />
                        </div>
                        <div>
                            <div className="text-lg font-medium">Gabrielle Winn</div>
                            <div className="text-gray-600 dark:text-gray-400">Co-founder of Acme Inc</div>
                        </div>
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer className="bg-gray-900 text-white py-6">
                <div className="max-w-6xl mx-auto text-center">
                    <p className="text-lg">&copy; 2024 Rehearse team. All rights reserved.</p>
                </div>
            </footer>
        </>

    );
}
export default Welcome;