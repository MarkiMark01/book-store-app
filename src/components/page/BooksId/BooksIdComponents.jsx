import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import BooksImageId from "./BooksIdImage";
import styles from "./styles.BookId.module.scss";

const BooksIdComponents = ({
  specificBook,
  handleQuantity,
  quantity,
  totalPrice,
  handlePurchase,
  id,
}) => {
  const location = useLocation();
  const from = location.state?.from || "/";
  const goBack = () => navigate(from);

  const navigate = useNavigate();

  return (
    <main>
      {specificBook && (
        <>
          <section className={styles.bookId}>
            <section className={styles.bookId__btnBack}>
              <button
                type="button"
                onClick={goBack}
                className={styles.bookId__buttonBack}
              >
                Go back
              </button>
            </section>
            <section className={styles.bookId__box}>
              <div>
                <BooksImageId bookData={specificBook} />
              </div>
              <div className={styles.bookId__info}>
                <p className={styles.bookId__title}>{specificBook.title}</p>
                <p className={styles.bookId__author}>
                  Book author: {specificBook.author}
                </p>
                <p className={styles.bookId__level}>
                  Book level: {specificBook.level}
                </p>
                <p className={styles.bookId__sd}>Short description:</p>
                <p className={styles.bookId__sDescription}>
                  {specificBook.shortDescription}
                </p>
                <Link
                  state={{ from }}
                  to={`/books/${id}/description`}
                  className={styles.bookId__description}
                >
                  Full description:
                </Link>
              </div>
              <div className={styles.bookId_purchase}>
                <div className={styles.booksId__price}>
                  <span>Price:</span>
                  <span className={styles.booksId__price2}>
                    ${specificBook.price}
                  </span>
                </div>
                <label className={styles.booksId__quantity}>
                  <span>Quantity:</span>
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantity}
                  />
                </label>
                <div className={styles.booksId__total}>
                  <span>Total:</span>
                  <span className={styles.booksId__total2}>${totalPrice}</span>
                </div>
                <div className={styles.bookId__btn}>
                  <button
                    type="button"
                    onClick={() => handlePurchase()}
                    className={styles.bookId__button}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </section>
            <section className={styles.bookId__fullDesc}>
              <Outlet />
            </section>
          </section>
        </>
      )}
    </main>
  );
};
export default BooksIdComponents;
