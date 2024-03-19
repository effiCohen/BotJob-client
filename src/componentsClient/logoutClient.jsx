import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteToken } from "../services/localService"

function LogoutClient() {
  let nav = useNavigate()

  useEffect(() => {
    deleteToken();
    if (confirm("Are you sure you want to log out?")) {
      nav("/");
      window.location.reload();
    }
    nav("/history");
  }, [])

  return (
    <></>
  )
}

export default LogoutClient