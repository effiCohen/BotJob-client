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
  const onInterviewClientClick = () => {
    nav("/interviewClient");
  }
  const onQuestionClientClick = () => {
    nav("/questionClient");
  }
  const onSignupClick = () => {
    nav("/signup");
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
      <button onClick={onInterviewClientClick}>- Interview -</button>
      <button onClick={onQuestionClientClick}>- Question -</button>
      <button onClick={onSetting}>- setting -</button>
      <button onClick={onAdmin}>- Admin -</button>
    </div>
  )
}

export default HeaderClient