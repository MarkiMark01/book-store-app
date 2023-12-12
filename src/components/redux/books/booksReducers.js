
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchBooks } from "./booksOperations";
import {
  setSpecificBook,
  addToCart,
  removeFromCart,
  clearCart,
} from "./booksActions";

const initialState = {
  entities: [],
  isLoading: false,
  error: null,
  specificBookReducer: null,
  cart: [],
};

// const entities = createReducer(initialState.entities, {
//   [fetchBooks.fulfilled]: (_, action) => action.payload,
// });

const entities = createReducer(initialState.entities, {
  [fetchBooks.fulfilled]: (_, action) => action.payload.books,
});

const isLoading = createReducer(initialState.isLoading, {
  [fetchBooks.pending]: () => true,
  [fetchBooks.fulfilled]: () => false,
  [fetchBooks.rejected]: () => false,
});

const error = createReducer(initialState.error, {
  [fetchBooks.rejected]: (_, action) => action.payload,
  [fetchBooks.pending]: () => null,
});

const specificBookReducer = createReducer(initialState.specificBookReducer, {
  [setSpecificBook.type]: (_, action) => action.payload,
});

const cart = createReducer(initialState.cart, {
  [addToCart.type]: (state, action) => [...state, action.payload],
  [removeFromCart.type]: (state, action) =>
    state.filter((item) => item.id !== action.payload.id),
  [clearCart.type]: () => [],
});

const booksReducer = combineReducers({
  entities,
  isLoading,
  error,
  specificBookReducer,
  cart,
});

export default booksReducer;
