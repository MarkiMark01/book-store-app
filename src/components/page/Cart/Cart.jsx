import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../../redux/books/booksActions";
import { useNavigate } from "react-router-dom";
import CartComponents from "./CartComponents";

const Cart = () => {
  const cart = useSelector((state) => state.books.cart) || [];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const goToHome = () => {
    navigate("/");
  };
  const goToBack = () => {
    navigate(-1);
  };

  return (
    <CartComponents
      goToBack={goToBack}
      goToHome={goToHome}
      handleClearCart={handleClearCart}
      cart={cart}
      handleRemoveFromCart={handleRemoveFromCart}
    />
  );
};

export default Cart;
