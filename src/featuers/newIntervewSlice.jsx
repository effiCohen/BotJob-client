import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newIntervew:{},
  TheQuestion:"The Question",
  time:{ sec: 0, min: 0, hr: 0 },
}

const newIntervewSlice = createSlice({
    name:"newIntervew",
    initialState,
    reducers:{
      addNewIntervew:(start,activation)=>{
        start.newIntervew = activation.payload.newIntervew ;
      },
       addTheQuestion:(start,activation)=>{
         start.TheQuestion = activation.payload.TheQuestion ;
       },
       addTime:(start,activation)=>{
         start.time = activation.payload.time ;
       }
    }
}) 

export const {addNewIntervew,addTheQuestion,addTime}  = newIntervewSlice.actions 
export default newIntervewSlice.reducer