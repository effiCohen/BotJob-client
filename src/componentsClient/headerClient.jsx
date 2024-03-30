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
    let ifToken = checkTokenLocal()
    if (ifToken) {
      setIfTokenExists(true)
      doApi();
    } else {
      setIfTokenExists(false)
    }
  }, []);

  const doApi = async () => {
    let url = API_URL + "/users/checkTokenAdmin";
    try {
      let resp = await doApiGet(url);
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
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                <li onClick={onHomeClick}><a>Home</a></li>
                <li onClick={onSetting}><a>Setting</a></li>
                <li onClick={onNewInterview}><a>New interview</a></li>
                {ifAdmin ? <li onClick={onAdmin}><a>Admin</a></li> : null}
              </ul>
            </div>
            <img src="/src/assets/Rehearse.svg" onClick={onHomeClick} className='size-24 hidden lg:flex' alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu justify-between menu-horizontal px-1">
              <li onClick={onSetting}><a> Setting </a></li>
              <li onClick={onNewInterview}><a>New interview</a></li>
              {ifAdmin ? <li onClick={onAdmin}><a>Admin</a></li> : null}
            </ul>
          </div>
          <div className="navbar-end">
            <ul className='menu justify-between menu-horizontal px-1'>
              <button onClick={onlogout} className="group flex items-center justify-start w-10 h-10  rounded-md  transition-all duration-300 hover:w-48 ">
                <img src="/src/assets/log-out.png" alt="Icon 1" className="h-8 w-8" />
                <div className="w-3/4 h-full flex items-center justify-center group-hover:opacity-100 text-night-rider opacity-0 transition-opacity duration-300 font-bold font-sans">Logout</div>
              </button>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default HeaderClient