import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.css'
import AppRoutes from "./appRoutes";
import  emailSlics from "./featuers/emailSlice";
import  intervewSlice from "./featuers/intervewSlice";
import  nameSlice from "./featuers/nameSlice";

const myStore = configureStore({
  reducer: {
    emailSlics,
    intervewSlice,
    nameSlice,
  }
})

function App() {

  return (
    <Provider store={myStore}>
      <AppRoutes />
    </Provider>
  )
}

export default App
