import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  myEmail:"test@gmail.com"
}

const emailSlice = createSlice({
    name:"myEmail",
    initialState:initValue,
    reducers:{
       addEmail:(start,activation)=>{
         start.myEmail = activation.payload.email ;
       }
    }
}) 

export const {addEmail}  = emailSlice.actions 
export default emailSlice.reducer