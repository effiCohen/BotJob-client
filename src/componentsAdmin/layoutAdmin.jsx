import React from 'react'
import { Outlet } from 'react-router-dom';
import HeaderAdmin from './headerAdmin';

function LayoutAdmin() {
  return (
    <React.StrictMode>
    <HeaderAdmin />
    <Outlet />
  </React.StrictMode>
  )
}

export default LayoutAdmin