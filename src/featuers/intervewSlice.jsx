import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMyIntervews: [],
  ThisInterview:"id interview",
  ThisQuestion:"id Question",
}

const intervewSlice = createSlice({
    name:"myIntervews",
    initialState,
    reducers:{
       addIntervews:(start,activation)=>{
         start.allMyIntervews = activation.payload.allMyIntervews ;
       },
       addThisIntervews:(start,activation)=>{
         start.ThisInterview = activation.payload.ThisInterview ;
       },
       addThisQuestion:(start,activation)=>{
         start.ThisQuestion = activation.payload.ThisQuestion ;
       }
    }
}) 

export const {addIntervews,addThisIntervews,addThisQuestion}  = intervewSlice.actions 
export default intervewSlice.reducer