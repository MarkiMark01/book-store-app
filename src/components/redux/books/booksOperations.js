import { createAsyncThunk } from "@reduxjs/toolkit";
import { getNewContacts, fetchBooksData } from "../../shared/api";
import { setSpecificBook } from "./booksActions";
import axios from "axios";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  try {
    const books = await getNewContacts();
    return books;
  } catch (error) {
    console.error("Error fetching books:", error.message);
    throw error;
  }
});

// export const fetchSpecificBooks = createAsyncThunk(
//   'books/fetchSpecificBooks',
//   async (id, { dispatch, rejectWithValue }) => {
//     try {
//       const data = await fetchBooksData();
//       if (id) {
//         const selectedBook = data.books.find((book) => book.id === parseInt(id));
//         dispatch(setSpecificBook(selectedBook));
//         return selectedBook;
//       } else {
//         dispatch(setSpecificBook(null));
//         return null;
//       }
//     } catch (error) {
//       console.error("Error fetching specific book:", error);
//       return rejectWithValue(error.message);
//     }
//   }
// );


















const instance = axios.create({
  baseURL: "https://65636629ee04015769a7273d.mockapi.io/books/BooksStore",
});

export const fetchSpecificBooks = createAsyncThunk(
  "books/fetchSpecificBooks",
  async (id, { dispatch, rejectWithValue }) => {
    try {
      const result = await instance.get("/");
      const data = result.data;

      if (id) {
        const selectedBook = data.find((book) => book.id === parseInt(id));
        dispatch(setSpecificBook(selectedBook));
        return selectedBook;
      } else {
        dispatch(setSpecificBook(null));
        return null;
      }
    } catch (error) {
      console.error("Error fetching specific book:", error);
      throw rejectWithValue(error.message);
    }
  }
);