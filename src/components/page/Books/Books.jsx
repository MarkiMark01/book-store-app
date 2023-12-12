import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { fetchBooks } from "../../redux/books/booksOperations";
import useAuth from "../../shared/hooks/useAuth";
import BooksComponents from "./BooksComponents";

const Books = () => {
  const books = useSelector((state) => state.books?.entities || []);
  const isLoading = useSelector((state) => state.books?.isLoading || false);
  const error = useSelector((state) => state.books?.error || null);

  const dispatch = useDispatch();

  const [textFilter, setTextFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("All books");

  const navigate = useNavigate();

  const isLogin = useAuth();

  const filteredBooks = books.filter((book) => {
    const numericPrice = parseFloat(book.price);

    return (
      book.title.toLowerCase().includes(textFilter.toLowerCase()) &&
      (priceFilter === "All books" ||
        (priceFilter === "from $0 to $15" &&
          numericPrice >= 0 &&
          numericPrice <= 15) ||
        (priceFilter === "from $15 to $30" &&
          numericPrice > 15 &&
          numericPrice <= 30) ||
        (priceFilter === "more than $30" && numericPrice > 30))
    );
  });

  const handleTextFilter = (e) => {
    setTextFilter(e.target.value);
  };

  const handlePriceFilter = (e) => {
    setPriceFilter(e.target.value);
  };

  const handleView = (id) => {
    navigate(`/books/${id}`);
  };

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  return (
    <BooksComponents
      isLoading={isLoading}
      error={error}
      filteredBooks={filteredBooks}
      handleView={handleView}
      isLogin={isLogin}
      textFilter={textFilter}
      priceFilter={priceFilter}
      handlePriceFilter={handlePriceFilter}
      handleTextFilter={handleTextFilter}
    />
  );
};

export default Books;
