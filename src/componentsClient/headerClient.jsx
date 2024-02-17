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
  const onForgatPassClick = () => {
    nav("/forgatPass");
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

  return (
    <div>
      <button onClick={onWelcomeClick}>- Welcome -</button>
      <button onClick={onSignupClick}>- signup -</button>
      <button onClick={onValidationClick}>- validation -</button>
      <button onClick={onLoginClick}>- Login -</button>
      <button onClick={onForgatPassClick}>- forgatPass -</button>
      <button onClick={onHomeClick}>- Home -</button>
      <button onClick={onPasswordValidationClick}>- PasswordValid -</button>
    </div>
  )
}

export default HeaderClient