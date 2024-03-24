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
                            <button onClick={toLogin} className="btn btn-primary lg:mr-4  mb-2 lg:mb-0">Login</button>
                            <button onClick={toSignUp} className="btn btn-secondary">Create account</button>
                        </div>
                    </div>

                </div>
                <section className="px-6 md:py-20 md:px-10 rounded-xl mt-10">
                <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why Choose Us</h2>
        <p className="mt-7 text-lg text-gray-700">Prepare for Your Next Job Interview with Confidence</p>
    </div>
    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Expert Interview Feedback</h3>
            <p className="mb-4 text-sm text-gray-600">Get personalized feedback from industry experts to refine your interview skills.</p>
        </div>
        <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Mock Interviews</h3>
            <p className="mb-4 text-sm text-gray-600">Practice with simulated interviews tailored to your target industry and role.</p>
        </div>
        <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Comprehensive Resources</h3>
            <p className="mb-4 text-sm text-gray-600">Access a wide range of resources including interview guides, tips, and sample questions.</p>
        </div>
        <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Real User Experiences</h3>
            <p className="mb-4 text-sm text-gray-600">Hear success stories and insights from individuals who secured their dream jobs with our platform.</p>
        </div>
        <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Tailored Learning Paths</h3>
            <p className="mb-4 text-sm text-gray-600">Receive personalized recommendations and guidance to improve your interview performance.</p>
        </div>
        <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">Save Your Progress</h3>
            <p className="mb-4 text-sm text-gray-600">Track your interview preparation progress and access your history to monitor your improvement over time.</p>
        </div>
        <div className="relative p-6 bg-white border border-gray-200 rounded-lg shadow-md">
            <h3 className="mb-2 text-lg font-semibold text-gray-900">AI-Powered Insights</h3>
            <p className="mb-4 text-sm text-gray-600">Leverage AI-driven analytics to gain valuable insights into your interview performance and areas for improvement.</p>
        </div>
    </div>
    <div className="max-w-5xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">What Our Users Say</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 text-sm mb-4">"Using this website has greatly improved my confidence and performance in job interviews. The mock interview sessions are incredibly helpful."</p>
                <p className="text-gray-600 text-xs">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 text-sm mb-4">"As someone preparing for job interviews, I find the resources on this website to be invaluable. The tips and guidance provided have made a significant difference in my interview preparation."</p>
                <p className="text-gray-600 text-xs">- Jane Smith</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-800 text-sm mb-4">"I highly recommend this website to anyone looking to improve their interview skills. The interactive practice sessions and expert advice have been instrumental in my job search journey."</p>
                <p className="text-gray-600 text-xs">- Michael Johnson</p>
            </div>
        </div>
    </div>
</section>



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