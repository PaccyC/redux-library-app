import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { bookAdded } from '../store/features/books/bookSlice';
import {  useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const BookForm = () => {

    const [name,setName]= useState('');
    const [price,setPrice]= useState(0);
    const [author,setAuthor]= useState('');
const dispatch= useDispatch();
const navigate= useNavigate();
 const handleSubmit = async(e)=>{
    e.preventDefault();
    

   const response = await axios.post("http://localhost:4000/api/books",{name,price,author},{
    headers:{
        'Content-Type':'application/json',
        }
   }
   )
   dispatch(bookAdded(response.data))
   navigate("/")

 }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Book Name</label>
                <input type="text"  
                 name='name'
                 value={name}
                 onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Author</label>
                <input type="text" 
                name='author'
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="">Price</label>
                <input type="number" 
                name='price'
                value={price}
                onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
            <button type='submit'>Add Book</button>
        </form>
      
    </div>
  )
}

export default BookForm
