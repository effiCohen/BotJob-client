import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkTokenLocal } from '../services/localService';
import { API_URL, doApiGet } from '../services/apiService';
import Lottie from 'react-lottie';
import lottieJson from '../assets/Animation - 1711314717058.json'


function HeaderClient() {
  let nav = useNavigate()
  const [ifTokenExists, setIfTokenExists] = useState(false);
  const [ifAdmin, setIfAdmin] = useState(false);

  useEffect(() => {
    doApi();
    let ifToken = checkTokenLocal()
    if (ifToken) {
      setIfTokenExists(true)
    } else {
      setIfTokenExists(false)
    }
  }, []);

  const doApi = async () => {
    let url = API_URL + "/users/checkTokenAdmin";
    try {
      let resp = await doApiGet(url);
      console.log(resp);
      if (resp) {
        setIfAdmin(true)
      } else {
        setIfAdmin(false)
      }
    }
    catch (err) {
      console.log(err.response.data);
    }
  }

  const onHomeClick = () => {
    nav("/history");
  }
  // const onRestPassword = () => {
  //   nav("/restpass");
  // }
  const onSetting = () => {
    nav("/setting");
  }
  const onAdmin = () => {
    nav("/Admin");
  }
  const onlogout = () => {
    nav("/logout");
  }
  const onNewInterview = () => {
    nav("/InterviewRole");
  }

  return (
    <div>
    {ifTokenExists ? (
      <div className="navbar bg-[#ffcad4a6] mb-auto top-0 text-black  w-full h-[10px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li onClick={onHomeClick}><a>Home</a></li>
              <li onClick={onSetting}><a>Setting</a></li>
              {/* <li onClick={onRestPassword}><a>Reset password</a></li> */}
              <li onClick={onNewInterview}><a>New interview</a></li>
              {ifAdmin ? <li onClick={onAdmin}><a>Admin</a></li> : null}
            </ul>
          </div>
          <img src="/src/assets/Rehearse.svg" onClick={onHomeClick} className='size-24 hidden lg:flex' alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu justify-between menu-horizontal px-1">
            <li onClick={onSetting}><a> Setting </a></li>
            {/* <li onClick={onRestPassword}><a>reset password</a></li> */}
            <li onClick={onNewInterview}><a>New interview</a></li>
            {ifAdmin ? <li onClick={onAdmin}><a>Admin</a></li> : null}
          </ul>
        </div>
        <div className="navbar-end">
          <ul className='menu justify-between menu-horizontal px-1'>
            <button className="group flex items-center justify-start w-10 h-10 bg-night-rider rounded-md shadow-md transition-all duration-300 hover:w-48 bg-white">
              {/* <svg viewBox="0 0 512 512" className="w-8 h-8 fill-current group-hover:text-white">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/>
              </svg> */}
              
              <Lottie options={{ loop: true, autoplay: true, animationData: lottieJson }} height={500} width={500} />

              {/* <img src="/src/assets/exit.png" alt="Icon 1" className="h-8 w-8" /> */}
              <div className="w-3/4 h-full flex items-center justify-center group-hover:opacity-100 text-night-rider opacity-0 transition-opacity duration-300">Logout</div>
            </button>
            {/* <li onClick={onlogout}><a> Logout <img src="/src/assets/redlogout.png" className='size-6' alt="Icon" /></a></li> */}
          </ul>
        </div>
      </div>
    ) : null}
  </div>
  )
}

export default HeaderClient