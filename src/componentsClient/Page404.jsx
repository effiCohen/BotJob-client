// import React from 'react'
import Lottie from 'react-lottie';
import lottieJson from '../assets/Animation - 1711401739235.json'

function Page404() {
  return (
    <div>
     <Lottie options={{ loop: true, autoplay: true, animationData: lottieJson }} height={300} width={300} />

    </div>
  )
}

export default Page404