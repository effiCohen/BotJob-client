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
      <div className="flex justify-between  bg-gray-800 mb-auto top-0  w-full text-white">
        <div></div>
        <div className='flex'>
          <div className="my-4 mx-11">
            <button onClick={onUserClick}>back to user</button>
          </div>
          <div className="my-4 mx-11">
            <button onClick={onDashboardAdminClick}>deshboard</button>
          </div>
        </div>
        <div></div>
      </div>


    </div>
  )
}

export default HeaderAdmin