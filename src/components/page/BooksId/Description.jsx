import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpecificBooks } from "../../redux/books/booksOperations";
import styles from "./styles.BookId.module.scss";

const Description = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const book = useSelector((state) => state.books.specificBookReducer);

  useEffect(() => {
    dispatch(fetchSpecificBooks(id));
  }, [dispatch, id]);

  return (
    <main>
      {book && (
        <>
          <section>
            <p>{book.description}</p>
          </section>
          <button
            type="button"
            onClick={() => navigate(`/books/${id}/`)}
            className={styles.bookId__fullDescButton}
          >
            Close
          </button>
        </>
      )}
    </main>
  );
};

export default Description;
