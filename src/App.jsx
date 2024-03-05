import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.css'
import AppRoutes from "./appRoutes";
import  intervewSlice from "./featuers/intervewSlice";
import  myDetailsSlice from "./featuers/myDetailsSlice";

const myStore = configureStore({
  reducer: {
    intervewSlice,
    myDetailsSlice,
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
