import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteToken } from "../services/localService"
import { toast } from 'react-toastify'

function LogoutClient() {
  let nav = useNavigate()

  useEffect(() => {
    deleteToken();
    toast.done("You have successfully logged out");
    nav("/");
    window.location.reload();
  }, [])

  return (
    <></>
  )
}

export default LogoutClient