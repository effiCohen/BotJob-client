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
          <div className="navbar top-auto">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                  <li ><a onClick={onHomeClick}>Homepage</a></li>
                  <li ><a onClick={onSetting}>Setting</a></li>
                  <li ><a onClick={onRestPassword}>Rest Password</a></li>
                  <li ><a onClick={onAdmin}>Admin</a></li>
                </ul>
              </div>
            </div>
            <div className="navbar-center">
              <img src="/src/assets/newLogo (2).jpg" className='size-10' alt="" />
            </div>
            <div className="navbar-end">
              <button className="btn btn-ghost ">
                <div className="indicator">

                  <button onClick={onlogout}>logout</button>
                </div>
              </button>
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