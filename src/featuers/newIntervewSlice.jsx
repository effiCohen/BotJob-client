import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newIntervew:{},
  time:{ sec: 0, min: 0, hr: 0 },
}

const newIntervewSlice = createSlice({
    name:"newIntervew",
    initialState,
    reducers:{
      addNewIntervew:(start,activation)=>{
        start.newIntervew = activation.payload.newIntervew ;
      },
       addTime:(start,activation)=>{
         start.time = activation.payload.time ;
       }
    }
}) 

export const {addNewIntervew,addTime}  = newIntervewSlice.actions 
export default newIntervewSlice.reducer