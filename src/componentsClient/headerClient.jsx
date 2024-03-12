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
  const onHomeHistoryClick = () => {
    nav("/history");
  }
  const onHomeQushtionsClick = () => {
    nav("/homeQushtions");
  }
  const onHomeAnswerClick = () => {
    nav("/homeAnswer");
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
  const onInterviewRole = () => {
    nav("/InterviewRole");
  }
  const onInterview = () => {
    nav("/Interview");
  }
  const onInterviewDone = () => {
    nav("/InterviewDone");
  }
  const onAdmin = () => {
    nav("/Admin");
  }


  return (
    <div>
      <button onClick={onWelcomeClick}>Welcome</button>
      <button >- - -</button>
      <button onClick={onSignupClick}>signup</button>
      <button >- - -</button>
      <button onClick={onValidationClick}>validation</button>
      <button >- - -</button>
      <button onClick={onLoginClick}>Login</button>
      <button >- - -</button>
      <button onClick={onForgotPassClick}>forgotPass</button>
      <button >- - -</button>
      <button onClick={onPasswordValidationClick}>PasswordValid</button>
      <button >- - -</button>
      <button onClick={onRestPassword}>restPassword</button>
      <button >- - -</button>
      <button onClick={onHomeClick}>Home</button>
      <button >- - -</button>
      <button onClick={onHomeHistoryClick}>History</button>
      <button >- - -</button>
      <button onClick={onSetting}>setting</button>
      <button >- - -</button>
      <button onClick={onInterviewRole}>Naw Interview</button>
      <button >- - -</button>
      <button onClick={onAdmin}>Admin</button>
    </div>
  )
}

export default HeaderClient