import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderAdmin() {
  let nav = useNavigate()

  const onDashboardAdminClick = () => {
    nav("/admin");
  }
  const onUserClick = () => {
    nav("/history");
  }



  return (
    <div>
      <div className="flex justify-between  bg-[#ffcad4a6] mb-auto top-0  w-full text-black font-[Inter]">
        <div></div>
        <div className='flex'>
          <div className="my-4 mx-11">
            <button onClick={onUserClick}>Back to user</button>
          </div>
          <div className="my-4 mx-11">
            <button onClick={onDashboardAdminClick}>Deshboard</button>
          </div>
        </div>
        <div></div>
      </div>


    </div>
  )
}

export default HeaderAdmin