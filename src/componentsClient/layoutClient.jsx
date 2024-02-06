import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderClient from './headerClient';

function LayoutClient() {
    return (
        <React.StrictMode>
            <HeaderClient />
            <Outlet />
        </React.StrictMode>
    )
}

export default LayoutClient