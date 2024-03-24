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
            <section className="relative  sm:py-16 lg:py-20 bg-[#FFFDFB] h-auto   ">
                <div className="px-4 mx-auto max-w-6xl  lg:px-8 sm:flex sm:flex-col ">
                    <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-10 ">
                        <div>
                            <div>
                                <img className="lg:w-[15%] w-[20%] mx-auto bg-white lg" src="/src/assets/newLogo (2).jpg" alt="" />
                            </div>
                            <div className="text-center lg:text-start justify-between">

                                <h1 className="text-center text-[34px] font-bold  text-gray-900   font-[inter]">BotJob Ai</h1>
                                <p className="text-gray-400 text-sm font-[Poppins] text-center ">Now your interviews are in one place and always under control</p>
                                <div className="flex justify-center  items-center lg:flex-col p-2 flex-col ">
                                    <div className="w-[50%] m-1">
                                        <button onClick={toLogin} className="block w-[80%]  m-1 mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] ">Login</button>
                                    </div>
                                    <div className="w-[50%]">
                                        <button onClick={toSignUp} className="block w-[80%]  mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl  py-3 font-[simple] ">Create account</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center   lg:justify-start ">
                            </div>
                        </div>

                        <div className="w-full mt-10">
                            <Carousel
                                className="rounded-xl mt-2 hidden lg:flex"
                                prevArrow={({ handlePrev }) => (
                                    <IconButton
                                        variant="text"
                                        color="black"
                                        size="lg"
                                        onClick={handlePrev}
                                        className="!absolute top-2/4 left-4 -translate-y-2/4 ml-5 "
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                            />
                                        </svg>
                                    </IconButton>
                                )}
                                nextArrow={({ handleNext }) => (
                                    <IconButton
                                        variant="text"
                                        color="black"
                                        size="lg"
                                        onClick={handleNext}
                                        className="!absolute top-2/4 !right-4 -translate-y-2/4 mr-5"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    </IconButton>
                                )}
                            >
                                <Card color="transparent" shadow={false} className="w-full max-w-[26rem] mx-auto">
                                    <CardHeader
                                        color="transparent"
                                        floated={false}
                                        shadow={false}
                                        className="mx-0 flex items-center font-[Inter] gap-4 pt-0 pb-8"
                                    >
                                        <Avatar
                                            size="lg"
                                            variant="circular"
                                            src="/src/assets/365471835_582891800473842_7378122036090440715_n.jpg"
                                            alt="Nitay Dalal"
                                        />
                                        <div className="flex w-full flex-col gap-0.5">
                                            <div className="flex items-center justify-between font-[Inter]">
                                                <Typography variant="h5" className="font-[Inter]" color="blue-gray">
                                                    Nitay Dalal
                                                </Typography>
                                                <div className="5 flex items-center gap-0">
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                </div>
                                            </div>
                                            <Typography color="blue-gray">Software team leader in I.D.F</Typography>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="mb-6 p-0 font-[Inter]">
                                        <Typography>
                                            &quot;This individual positioning himself as a front-end development specialist, takes pride in his ability to craft precise and stunning user interfaces.
                                            In addition to his advanced technical skills, he serves as a team lead with a dedicated approach, guiding his team with insight, excellent management skills and a commitment to efficient upgrade and development of every project.
                                            &quot;
                                        </Typography>
                                    </CardBody>
                                </Card>
                                <Card color="transparent" shadow={false} className="w-full max-w-[26rem] mx-auto">
                                    <CardHeader
                                        color="transparent"
                                        floated={false}
                                        shadow={false}
                                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                                    >
                                        <Avatar
                                            size="lg"
                                            variant="circular"
                                            src="https://media.licdn.com/dms/image/D4D03AQGkFhULKE39Hw/profile-displayphoto-shrink_400_400/0/1709106759468?e=1715817600&v=beta&t=_GfAASYjRcMeOSiMA-wBtrBVM9wGXDc5HA7ryuBqxWU"
                                            alt="Lavie Baxi"
                                        />
                                        <div className="flex w-full flex-col gap-0.5">
                                            <div className="flex items-center justify-between">
                                                <Typography variant="h5" color="blue-gray">
                                                    Lavie Baxi
                                                </Typography>
                                                <div className="5 flex items-center gap-0">
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                </div>
                                            </div>
                                            <Typography color="blue-gray">Full Stack Developer | Ex-81</Typography>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="mb-6 p-0">
                                        <Typography>
                                            &quot;I found a solution as an experienced web developer with a demonstrated history of working in the military industry.
                                            Skilled in JavaScript, TypeScript, Angular, React, AngularJS, NodeJS, Python, Django, DRF, postgresql PL/SQL, .NET framework (C#).

                                            B.Sc Computer Science, The College of Management Academic Studies.&quot;
                                        </Typography>
                                    </CardBody>
                                </Card>
                                <Card color="transparent" shadow={false} className="w-full max-w-[26rem] mx-auto">
                                    <CardHeader
                                        color="transparent"
                                        floated={false}
                                        shadow={false}
                                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                                    >
                                        <Avatar
                                            size="lg"
                                            variant="circular"
                                            src="https://media.licdn.com/dms/image/D4D03AQGlyiqRHGbhGg/profile-displayphoto-shrink_800_800/0/1693995083299?e=1715817600&v=beta&t=3MYZNU49iN0NkCXlpXAJApaEen0vkLv7bBRKiYUNGrk"
                                            alt="Keren Katz"
                                        />
                                        <div className="flex w-full flex-col gap-0.5">
                                            <div className="flex items-center justify-between">
                                                <Typography variant="h5" color="blue-gray">
                                                    Keren Katz
                                                </Typography>
                                                <div className="5 flex items-center gap-0">
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                    <StarIcon />
                                                </div>
                                            </div>
                                            <Typography color="blue-gray">Former CEO & founder, ex-programmer, product manager in Sygnia</Typography>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="mb-6 p-0">
                                        <Typography>
                                            &quot;
                                            The former CEO and founder, previously a programmer and product manager in Sygnia, significantly elevated our website.
                                            His expertise and leadership were key factors in creating a robust and user-friendly platform.
                                            We credit much of our success to his visionary contributions and dedication to excellence.&quot;
                                        </Typography>
                                    </CardBody>
                                </Card>





                            </Carousel>
                        </div>
                    </div>
                    <section
                        className="relative block px-6 md:py-20 md:px-10  border-neutral-900 rounded-2xl">


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

                </div>



            </section >

            <footer>
                <div className="bg-black h-[40px]  w-full ">
                    <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-purple-50">©️ 2024 Copyright: BotJob teem</p>                    </div>
            </footer>



        </>

    );
}
export default Welcome;