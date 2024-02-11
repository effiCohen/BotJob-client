// import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderClient() {
  let nav = useNavigate()

  const onLoginClick = () => {
    nav("/");
  }
  const onHomeClick = () => {
    nav("/home");
  }
  const onSignupClick = () => {
    nav("/signup");
  }

  return (
    <div>
      <h1>HeaderClient</h1>
      <button onClick={onLoginClick}>Login</button>
      <button onClick={onHomeClick}>Home</button>
      <button onClick={onSignupClick}>signup</button>
    </div>
  )
}

export default HeaderClient