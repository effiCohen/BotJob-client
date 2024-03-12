import { React } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Carousel, IconButton } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

function HomeClient() {
  const myName = useSelector(state => state.myDetailsSlice.name);
  let nav = useNavigate();
  const toHistory = () => {
    nav("/history");
  };
  const toNewInterview = () => {
    nav("/InterviewRole");
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
    <section className="relative py-12 sm:py-16 lg:py-20 bg-[#FFFDFB]">
        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj">
              Welcome {myName}
            </h1>
      <div className="flex justify-center items-center space-x-8">
        
    {/* Content on the right side */}
    <div className="w-1/2 text-center lg:text-start justify-between">
          <div className="mt-3">
          
            {/* <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">  something.................</p> */}
            <div className="flex flex-col">
              <button
                onClick={toHistory}
                className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5 relative"
              >
                Your history
                <img
                  src="/src/assets/history.png"
                  alt="Icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
              </button>
              <button
                onClick={toNewInterview}
                className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5 relative"
              >
                New Interview..
                <img
                  src="/src/assets/interview2.png"
                  alt="Icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel on the left side */}
        <div className="w-1/2">
        <Carousel 
        className="rounded-xl mt-2"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 ml-5"
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
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <Avatar
              size="lg"
              variant="circular"
              src="/src/assets/365471835_582891800473842_7378122036090440715_n.jpg"
              alt="Nitay Dalal"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
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
              <Typography color="blue-gray">Software Team leader at IDF</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;This individual, positioning himself as a front-end development specialist, takes pride in his ability to craft precise and stunning user interfaces. In addition to his advanced technical skills, he serves as a team lead with a dedicated approach, guiding his team with insight, excellent management skills, and a commitment to efficient upgrade and development of every project.
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
              <Typography color="blue-gray">Former CEO & founder, ex-programmer, product manager at Sygnia</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;
The former CEO and founder, previously a programmer and product manager at Sygnia, significantly elevated our website. His expertise and leadership were key factors in creating a robust and user-friendly platform. We credit much of our success to his visionary contributions and dedication to excellence.&quot;
            </Typography>
          </CardBody>
        </Card>





      </Carousel>
        </div>

    
      </div>
    </section>
  );
}


export default HomeClient