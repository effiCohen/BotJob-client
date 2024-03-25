// import React from 'react'
import Lottie from 'react-lottie';
import lottieJson from '../assets/Animation - 1711401739235.json'

function Page404() {
  return (
    <div>
      {/* <h1 className="font-[SM-Sans] text-2xl text-[#2E3837]">Page not found error 404.</h1> */}
     <Lottie options={{ loop: true, autoplay: true, animationData: lottieJson }} height={300} width={300} />

    </div>
  )
}

export default Page404