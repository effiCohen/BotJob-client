import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allMyIntervews: [],
  allAdminIntervews: [],
  ThisInterview:"id interview",
  ThisInterviewAdmin:"id interview admin",
  ThisQuestion:"id Question",
  ThisAdminQuestion:"id Question Admin",
}

const intervewSlice = createSlice({
    name:"myIntervews",
    initialState,
    reducers:{
       addIntervews:(start,activation)=>{
         start.allMyIntervews = activation.payload.allMyIntervews ;
       },
       addAdminIntervews:(start,activation)=>{
         start.allAdminIntervews = activation.payload.allAdminIntervews ;
       },
       addThisIntervews:(start,activation)=>{
         start.ThisInterview = activation.payload.ThisInterview ;
       },
       addThisIntervewAdmin:(start,activation)=>{
         start.ThisInterviewAdmin = activation.payload.ThisInterviewAdmin ;
       },
       addThisQuestion:(start,activation)=>{
         start.ThisQuestion = activation.payload.ThisQuestion ;
       },
       addThisAdminQuestion:(start,activation)=>{
         start.ThisAdminQuestion = activation.payload.ThisAdminQuestion ;
       }
    }
}) 

export const {addIntervews,addThisIntervews,addThisQuestion,addAdminIntervews,addThisIntervewAdmin,addThisAdminQuestion}  = intervewSlice.actions 
export default intervewSlice.reducer