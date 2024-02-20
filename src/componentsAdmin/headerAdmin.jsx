// import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderAdmin() {
  let nav = useNavigate()

  const onDashboardAdminClick = () => {
    nav("/admin");
  }
  const onInterviewAdminClick = () => {
    nav("/admin/interview");
  }
  const onQuestionAdminClick = () => {
    nav("/admin/question");
  }
  const onUserClick = () => {
    nav("/");
  }



  return (
    <div>
      <button onClick={onDashboardAdminClick}>- dashboard -</button>
      <button onClick={onInterviewAdminClick}>- interview -</button>
      <button onClick={onQuestionAdminClick}>- question  -</button>
      <button onClick={onUserClick}>-Back to user  -</button>
 
    </div>
  )
}

export default HeaderAdmin