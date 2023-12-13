
import axios from "axios";
const instance = axios.create({
  baseURL: "https://65636629ee04015769a7273d.mockapi.io/books/BooksStore",
});

export const getNewContacts = async () => {
  try {
    const result = await instance.get("/");
    return result.data;
  } catch (error) {
    console.error("Error fetching new contacts:", error);
    throw error;
  }
};

export const fetchBooksData = async () => {
  try {
    const result = await instance.get('/');
    return result.data;
  } catch (error) {
    console.error("Error fetching new contacts:", error);
    throw error;
  }
}





















// export const fetchBooksData = async () => {
//   try {
//     const response = await fetch("/books.json");
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching books data:", error);
//     throw error;
//   }
// };

// export const getNewContacts = async () => {
//   try {
//     const response = await fetch('/books.json');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };