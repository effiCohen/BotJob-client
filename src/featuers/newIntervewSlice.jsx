import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newIntervew:{},
  TheQuestion:"The Question",
}

const newIntervewSlice = createSlice({
    name:"newIntervew",
    initialState,
    reducers:{
      addNewIntervew:(start,activation)=>{
        console.log("activation.payload.newIntervew",activation.payload.newIntervew);
        start.newIntervew = activation.payload.newIntervew ;
        console.log(start.newIntervew);
      },
       addTheQuestion:(start,activation)=>{
         start.TheQuestion = activation.payload.TheQuestion ;
       }
    }
}) 

export const {addNewIntervew,addTheQuestion}  = newIntervewSlice.actions 
export default newIntervewSlice.reducer