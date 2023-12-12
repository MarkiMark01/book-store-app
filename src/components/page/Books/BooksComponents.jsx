import React from "react";
import BooksImage from "./BooksImage";
import styles from "./stylesBooks.module.scss";

const BooksComponents = ({
  isLoading,
  error,
  filteredBooks,
  handleView,
  isLogin,
  textFilter,
  priceFilter,
  handlePriceFilter,
  handleTextFilter,
}) => {
  return (
    <main>
      <section className={styles.books}>
        <section className={styles.books__filter}>
          <input
            type="text"
            placeholder="Search by book title"
            value={textFilter}
            onChange={handleTextFilter}
            className={styles.books__filterText}
          />
          <select
            value={priceFilter}
            onChange={handlePriceFilter}
            className={styles.books__filterPrice}
          >
            <option>All books</option>
            <option>from $0 to $15</option>
            <option>from $15 to $30</option>
            <option>more than $30</option>
          </select>
        </section>
        <section className={styles.books__mainContainer}>
          {isLoading ? (
            <p style={{ fontSize: "20px" }}>Loading...</p>
          ) : error ? (
            <p style={{ fontSize: "20px" }}>Error: {error}</p>
          ) : (
            <div>
              {filteredBooks.length > 0 ? (
                <ul className={styles.books__container}>
                  {filteredBooks.map((book) => (
                    <li key={book.id} className={styles.books__box}>
                      <BooksImage bookData={book} />
                      <p className={styles.books__title}>{book.title}</p>
                      <p className={styles.books__author}>{book.author}</p>
                      <div className={styles.book__purchase}>
                        <p className={styles.books__price}>${book.price}</p>
                        <button
                          type="button"
                          onClick={() => {
                            handleView(book.id);
                            if (!isLogin) {
                              alert(
                                "Please, enter your login and password or sign up, please :)"
                              );
                            }
                          }}
                          className={styles.books__button}
                        >
                          View
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Books not found...</p>
              )}
            </div>
          )}
        </section>
      </section>
    </main>
  );
};

export default BooksComponents;
