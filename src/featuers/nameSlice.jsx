import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  myName:"test",
}

const nameSlice = createSlice({
    name:"myName",
    initialState:initValue,
    reducers:{
       addName:(start,activation)=>{
         start.myName = activation.payload.name ;
       }
    }
}) 

export const {addName}  = nameSlice.actions 
export default nameSlice.reducer