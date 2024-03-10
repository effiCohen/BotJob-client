import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  aNewIntervew: "aa",
  TheQuestion:"The Question",
}

const newIntervewSlice = createSlice({
    name:"newIntervew",
    initialState,
    reducers:{
      addNewIntervew:(start,activation)=>{
        start.aNewIntervew = activation.payload.newIntervew ;
      },
       addTheQuestion:(start,activation)=>{
         start.TheQuestion = activation.payload.TheQuestion ;
       }
    }
}) 

export const {addNewIntervew,addTheQuestion}  = newIntervewSlice.actions 
export default newIntervewSlice.reducer