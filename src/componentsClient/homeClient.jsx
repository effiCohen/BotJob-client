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
    <div className="mt-3">
      <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-3xl font-pj"> Welcame {myName}</h1>
      <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">  something.................</p>
      <div className="flex flex-col">

        <button onClick={toHistory} className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5 relative">
          Your history
          <img src="/src/assets/history.png" alt="Icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5" />
        </button>
        <button onClick={toNewInterview} className="block w-[90%] max-w-xs mx-auto bg-[#2E3837] hover:bg-[#FAF7FF] hover:text-[#2E3837] font-bold text-white rounded-2xl py-3 font-[simple] mt-5 relative">
          New Interview..
          <img src="/src/assets/interview2.png" alt="Icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5" />

        </button>
      </div>
      <Carousel
        className="rounded-xl mt-2"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-2/4 ml-20"
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
            className="!absolute top-2/4 !right-4 -translate-y-2/4 mr-20"
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
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Tania Andrew
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <Typography color="blue-gray">Frontend Lead @ Google</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;I found solution to all my design needs from Creative Tim. I use
              them as a freelancer in my hobby projects for fun! And its really
              affordable, very humble guys !!!&quot;
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
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Tania Andrew
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <Typography color="blue-gray">Frontend Lead @ Google</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;I found solution to all my design needs from Creative Tim. I use
              them as a freelancer in my hobby projects for fun! And its really
              affordable, very humble guys !!!&quot;
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
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              alt="tania andrew"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Tania Andrew
                </Typography>
                <div className="5 flex items-center gap-0">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
              <Typography color="blue-gray">Frontend Lead @ Google</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>
              &quot;I found solution to all my design needs from Creative Tim. I use
              them as a freelancer in my hobby projects for fun! And its really
              affordable, very humble guys !!!&quot;
            </Typography>
          </CardBody>
        </Card>





      </Carousel>

    </div>
  )
}

export default HomeClient