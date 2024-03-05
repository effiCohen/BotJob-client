import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMyIntervews: [],
  ThisInterview:"id interview"
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
       }
    }
}) 

export const {addIntervews,addThisIntervews}  = intervewSlice.actions 
export default intervewSlice.reducer