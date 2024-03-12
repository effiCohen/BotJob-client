// import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkTokenLocal } from '../services/localService';

function HeaderClient() {
  let nav = useNavigate()
  const [ifTokenExists, setIfTokenExists] = useState(false);

  useEffect(() => {
    let ifToken = checkTokenLocal()
    if (ifToken) {
      console.log(true);
      setIfTokenExists(true)
    } else {
      console.log(false);
      setIfTokenExists(false)
    }

  }, []);

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
  const onAdmin = () => {
    nav("/Admin");
  }


  return (
    <div>
      {ifTokenExists ?
        <>
          <button onClick={onWelcomeClick}>Welcome</button>
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
        </>
        :
        <>
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
        </>
      }
    </div>
  )
}

export default HeaderClient