// import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderAdmin() {
  let nav = useNavigate()

  const onWelcomeClick = () => {
    nav("/admin");
  }
  const onDashboardAdminClick = () => {
    nav("/admin/users");
  }
  const onInterviewAdminClick = () => {
    nav("/admin/interview");
  }
  const onQuestionAdminClick = () => {
    nav("/admin/users");
  }
  const onUserClick = () => {
    nav("/");
  }



  return (
    <div>
      <button onClick={onWelcomeClick}>- home Admin -</button>
      <button onClick={onDashboardAdminClick}>- dashboard  -</button>
      <button onClick={onInterviewAdminClick}>- interview -</button>
      <button onClick={onQuestionAdminClick}>- question  -</button>
      <button onClick={onUserClick}>-bake to user  -</button>
 
    </div>
  )
}

export default HeaderAdmin