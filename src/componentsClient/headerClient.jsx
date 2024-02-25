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
  const onFeedback = () => {
    nav("/Feedback");
  }
  const onQuestions = () => {
    nav("/Questions");
  }
  const onAnswer = () => {
    nav("/Answer");
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
      <button onClick={onSetting}>- setting -</button>
      <button onClick={onInterviewRole}>- InterviewRole -</button>
      <button onClick={onInterview}>- Interview -</button>
      <button onClick={onInterviewDone}>- InterviewDone -</button>
      <button onClick={onFeedback}>- Feedback -</button>
      <button onClick={onQuestions}>- Questions -</button>
      <button onClick={onAnswer}>- Answer -</button>


      <button onClick={onAdmin}>- Admin -</button>
    </div>
  )
}

export default HeaderClient