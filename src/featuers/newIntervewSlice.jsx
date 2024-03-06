import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newIntervew: {},
  TheQuestion:"The Question",
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
       }
    }
}) 

export const {addNewIntervew,addTheQuestion}  = newIntervewSlice.actions 
export default newIntervewSlice.reducer