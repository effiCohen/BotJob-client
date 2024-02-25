import { createSlice } from "@reduxjs/toolkit";

const initValue = {
  myIntervews: []
}

const intervewSlice = createSlice({
    name:"myIntervews",
    initialState:initValue,
    reducers:{
       addIntervews:(start,activation)=>{
         start.myIntervews = activation.payload.intervews ;
       }
    }
}) 

export const {addIntervews}  = intervewSlice.actions 
export default intervewSlice.reducer