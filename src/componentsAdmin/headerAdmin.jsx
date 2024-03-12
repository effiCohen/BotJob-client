import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderAdmin() {
  let nav = useNavigate()

  const onDashboardAdminClick = () => {
    nav("/admin");
  }
  const onUserClick = () => {
    nav("/");
  }



  return (
    <div>
      <button onClick={onDashboardAdminClick}>dashboard</button>
      <button >- - -</button>
      <button onClick={onUserClick}>Back to user</button>
    </div>
  )
}

export default HeaderAdmin