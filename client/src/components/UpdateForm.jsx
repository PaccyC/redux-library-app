import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {bookUpdated } from '../store/features/books/bookSlice';
import {useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
const UpdateForm = () => {

    const [name,setName]= useState('');
    const [price,setPrice]= useState(0);
    const [author,setAuthor]= useState('');
const dispatch= useDispatch();
const {id}= useParams()
const navigate= useNavigate();

 const handleSubmit = async(e)=>{
    e.preventDefault();
    
   const response = await axios.put(`http://localhost:4000/api/books/${id}`,{name,price,author},{
    headers:{
        'Content-Type':'application/json',
        }
   }
   )
   dispatch(bookUpdated(response.data))

   console.log(response.data);
   navigate("/");

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
            <button type='submit'>Update</button>
        </form>
      
    </div>
  )
}

export default UpdateForm
