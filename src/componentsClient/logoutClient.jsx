import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteToken } from "../services/localService"

function LogoutClient() {
  let nav = useNavigate()

  useEffect(() => {
    deleteToken()
    nav("/");
    window.location.reload();
  }, [])

  return (
    <></>
  )
}

export default LogoutClient