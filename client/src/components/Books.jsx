import React, { useEffect } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { booksReceived,bookRequested } from '../store/features/books/bookSlice'
import { Link} from 'react-router-dom'
const Books = () => {
    const dispatch=useDispatch();
  

    const books = useSelector(state =>state.books);
    useEffect (()=>{
        const fetchBooks = async () => {
            dispatch(bookRequested()); 
            try {
              const response = await axios.get('http://localhost:4000/api/books'); 
              dispatch(booksReceived(response.data)); 
            } catch (error) {
              console.error('Error fetching books:', error);
              
            }
          };
      
        
          fetchBooks();
          
    },[])
    const removeBook = async(id)=>{
        try {
            
            const response = await axios.delete(`http://localhost:4000/api/books/${id}`);
            console.log(response.data);
        } catch (error) {
            
        }
      }
  return (
    <div>
    <p>The list of books</p>
    {books.loading ? (
      <p>Loading...</p>
    ) : (
      <table>
        <thead>
          <tr>
            <th>Name of Book</th>
            <th>Author</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.list.map(book => (
            <tr key={book._id}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td>
                <button onClick={()=>removeBook(book._id)}>Delete</button>
                <Link to={`/update/${book._id}`}>Update</Link>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    )}
    <Link to='/add'>Add Book</Link>
  </div>
  )
}

export default Books
