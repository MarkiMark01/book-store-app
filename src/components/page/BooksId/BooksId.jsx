import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSpecificBooks } from "../../redux/books/booksOperations";
import { addToCart } from "../../redux/books/booksActions";
import BooksIdComponents from "./BooksIdComponents";

const BookId = () => {
  const specificBook = useSelector((state) => state.books.specificBookReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    dispatch(fetchSpecificBooks(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (specificBook) {
      calculateTotalPrice(quantity, specificBook.price);
    }
  }, [specificBook, quantity]);

  const handleQuantity = (e) => {
    const count = e.target.value;
    const newQuantity = count <= 0 ? 1 : count > 42 ? 42 : count;
    setQuantity(newQuantity);
    calculateTotalPrice(newQuantity, specificBook.price);
  };

  const calculateTotalPrice = (quantity, price) => {
    const total = quantity * price;
    setTotalPrice(total.toFixed(2));
  };

  const handlePurchase = () => {
    const bookToAddToCart = {
      title: specificBook.title,
      price: specificBook.price,
      quantity: quantity,
      totalPrice: totalPrice,
    };

    dispatch(addToCart(bookToAddToCart));

    setQuantity(1);
    setTotalPrice(0);

    navigate("/cart");
  };

  if (!specificBook) {
    return <p>No book selected</p>;
  }

  return (
    <BooksIdComponents
      specificBook={specificBook}
      handleQuantity={handleQuantity}
      quantity={quantity}
      totalPrice={totalPrice}
      handlePurchase={handlePurchase}
      id={id}
    />
  );
};

export default BookId;
