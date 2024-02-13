// import React from 'react'
import { useNavigate } from 'react-router-dom';

function HeaderClient() {
  let nav = useNavigate()

  const onWelcomeClick = () => {
    nav("/");
  }
  const onLoginClick = () => {
    nav("/login");
  }
  const onValidationClick = () => {
    nav("/validation");
  }
  const onHomeClick = () => {
    nav("/home");
  }
  const onSignupClick = () => {
    nav("/signup");
  }
  const onForgotClick = () => {
    nav("/forgot");
  }

  return (
    <div>
      <button onClick={onWelcomeClick}>- Welcome -</button>
      <button onClick={onSignupClick}>- signup -</button>
      <button onClick={onValidationClick}>- validation -</button>
      <button onClick={onLoginClick}>- Login -</button>
      <button onClick={onHomeClick}>- Home -</button>
      <button onClick={onForgotClick}>- Forgot -</button>

    </div>
  )
}

export default HeaderClient