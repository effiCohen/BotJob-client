import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkTokenLocal } from '../services/localService';

function HeaderClient() {
  let nav = useNavigate()
  const [ifTokenExists, setIfTokenExists] = useState(false);

  useEffect(() => {
    let ifToken = checkTokenLocal()
    if (ifToken) {
      setIfTokenExists(true)
    } else {
      setIfTokenExists(false)
    }
  }, []);

  const onHomeClick = () => {
    nav("/home");
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
  const onlogout = () => {
    nav("/logout");
  }
  return (
    <div>
      {ifTokenExists ?
        <>

          <button onClick={onRestPassword}>restPassword</button>
          <button >- - -</button>
          <button onClick={onHomeClick}>Home</button>
          <button >- - -</button>
          <button onClick={onSetting}>setting</button>
          <button >- - -</button>
          <button onClick={onAdmin}>Admin</button>
          <button >- - -</button>
          <button onClick={onlogout}>logout</button>
        </>
        :
        <></>
      }
    </div>
  )
}

export default HeaderClient