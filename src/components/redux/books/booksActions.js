import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const setSpecificBook = createAction('book/setSpecificBook');
// export const addToCart = createAction('cart/addToCart');
export const addToCart = createAction('cart/addToCart', (book) => ({
    payload: {
        ...book,
        id: nanoid(),
    },
}));
export const removeFromCart = createAction('cart/removeFromCart');
export const clearCart = createAction('cart/clearCart');


// export const fetchBooksRequest = createAction('/books/fetchBooksRequest');
// export const fetchBooksSuccess = createAction('/books/fetchBooksSuccess');
// export const fetchBooksError = createAction('/books/fetchBooksError');



