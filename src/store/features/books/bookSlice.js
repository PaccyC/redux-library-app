import {createSlice  } from '@reduxjs/toolkit'

const initialState ={
    list:[],
    loading:false,
    error:''
}
const bookSlice = createSlice({
    name:"books",
    initialState,
    reducers:{
         bookAdded: (books,action)=>{
          
            books.list.push(action.payload)
         },
         bookRequested:(books)=>{
            books.loading =true
         },
         booksReceived:(books,action)=>{
            books.list = action.payload;
            books.loading = false;
         }
    }
})

export const {bookAdded,bookRequested,booksReceived}= bookSlice.actions
export default bookSlice.reducer;