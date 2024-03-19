import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkTokenLocal } from '../services/localService';


function HeaderClient() {
  let nav = useNavigate()
  const [ifTokenExists, setIfTokenExists] = useState(false);

  useEffect(() => {
    let ifToken = checkTokenLocal()
    if (ifToken) {
      setIfTokenExists(true)
    } else {
      setIfTokenExists(false)
    }
  }, []);

  const onHomeClick = () => {
    nav("/home");
  }
  const onRestPassword = () => {
    nav("/restpass");
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

  return (
    <div>
      {ifTokenExists ?
        <>

          {/* <button onClick={onRestPassword}>restPassword</button>
          <button >- - -</button>
          <button onClick={onHomeClick}>Home</button>
          <button >- - -</button>
          <button onClick={onSetting}>setting</button>
          <button >- - -</button>
          <button onClick={onAdmin}>Admin</button>
          <button >- - -</button>
          <button onClick={onlogout}>logout</button> */}
          <div className="navbar bg-gray-800 mb-auto top-0  w-full text-white">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li onClick={onHomeClick}><a>Home</a></li>
                  <li onClick={onSetting}><a>Setting</a></li>
                  <li onClick={onRestPassword}><a>restPassword</a></li>
                  <li onClick={onAdmin}><a>Admin</a></li>
                </ul>
              </div>
              <img src="/src/assets/navlogo.png" onClick={onHomeClick} className='size-14 hidden lg:flex' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu justify-between menu-horizontal px-1">
                <li onClick={onSetting}><a> Setting <img src="https://i.pinimg.com/originals/50/74/eb/5074eb89bce06dfc710ea21d5c0e2913.png" className='size-6' alt="Icon" /></a></li>
                <li onClick={onRestPassword}><a>restPassword</a></li>
                <li onClick={onAdmin}><a>Admin</a></li>
              </ul>
            </div>
            <div className="navbar-end">
              <ul className='menu justify-between menu-horizontal px-1'>
                <li onClick={onlogout}><a> Logout <img src="/src/assets/redlogout.png" className='size-6' alt="Icon" /></a></li>
              </ul>
            </div>
          </div>
        </>
        :
        <></>
      }
    </div>
  )
}

export default HeaderClient