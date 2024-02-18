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
  const onForgotPassClick = () => {
    nav("/forgotPass");
  }
  const onValidationClick = () => {
    nav("/validation");
  }
  const onPasswordValidationClick = () => {
    nav("/passwordValidation");
  }
  const onHomeClick = () => {
    nav("/home");
  }
  const onSignupClick = () => {
    nav("/signup");
  }
  const onRestPassword = () => {
    nav("/restpass");
  }

  return (
    <div>
      <button onClick={onWelcomeClick}>- Welcome -</button>
      <button onClick={onSignupClick}>- signup -</button>
      <button onClick={onValidationClick}>- validation -</button>
      <button onClick={onLoginClick}>- Login -</button>
      <button onClick={onForgotPassClick}>- forgotPass -</button>
      <button onClick={onPasswordValidationClick}>- PasswordValid -</button>
      <button onClick={onRestPassword}>- restPassword -</button>
      <button onClick={onHomeClick}>- Home -</button>
    </div>
  )
}

export default HeaderClient