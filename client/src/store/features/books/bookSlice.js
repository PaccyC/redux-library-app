import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [],
  loading: false,
  error: '',
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    bookAdded: (books, action) => {
      books.list.push(action.payload);
    },
    bookRequested: (books) => {
      books.loading = true;
    },
    booksReceived: (books, action) => {
      books.list = action.payload;
      books.loading = false;
    },
    bookUpdated:(books,action)=>{
       const index=  books.list.findIndex(book => book._id ===action.payload.id)
       books.list[index] = action.payload
    }
  },
});

export const { bookAdded, bookRequested, booksReceived,bookUpdated } = bookSlice.actions;
export default bookSlice.reducer;

// Async action creator using thunk middleware
export const fetchBooks = () => async (dispatch) => {
  dispatch(bookRequested());
  try {
    const response = await axios.get('http://localhost:4000/api/books');
    console.log(response.data);
    dispatch(booksReceived(response.data));
  } catch (error) {
    console.error('Error while fetching books', error);
    // Dispatch an action to update error state if needed
  }
};
