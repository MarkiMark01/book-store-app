import React, { useState } from "react";
import styles from "./styles.Cart.module.scss";
import cartImg from "../../../Assets/booksImg/cart.svg";
import bin from "../../../Assets/booksImg/bin.png";
import ModalWindow from "../Modal/Modal";

const CartComponents = ({
  goToBack,
  goToHome,
  handleClearCart,
  cart,
  handleRemoveFromCart,
}) => {
  const totalSum = cart
    .reduce((sum, item) => sum + parseFloat(item.totalPrice), 0)
    .toFixed(2);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Opening modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setIsModalOpen(false);
  };

  const handlePurchase = () => {
    openModal();
    handleClearCart();
  };

  return (
    <main className={styles.cart}>
      <section className={styles.cart__container}>
        <section className={styles.cart__buttons}>
          <section className={styles.cart__buttonsBack}>
            <button
              type="button"
              onClick={() => goToBack()}
              className={styles.cart__button}
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => goToHome()}
              className={styles.cart__button}
            >
              Home
            </button>
          </section>
          <section>
            <button
              type="button"
              onClick={handlePurchase}
              className={styles.cart__button}
              disabled={cart.length === 0}
            >
              Purchase
            </button>
          </section>
        </section>
        <ul className={styles.cart__box}>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index} className={styles.cart__block}>
                <div className={styles.cart__titles}>
                  <div>Title</div>
                  <div>
                    <span className={styles.cart__pr}>Price</span>
                    <span className={styles.cart__qua}>Quantity</span>
                    <span>Total</span>
                  </div>
                </div>
                <div className={styles.cart__value}>
                  <span className={styles.cart__tit}>{item.title}</span>
                  <img
                    src={bin}
                    alt="Remove"
                    onClick={() => handleRemoveFromCart(item)}
                    width={20}
                    height={20}
                    style={{ cursor: "pointer" }}
                  />
                  <span className={styles.cart__pri}>${item.price}</span>
                  <span className={styles.cart__quant}>{item.quantity}</span>
                  <span className={styles.cart__totPr}>${item.totalPrice}</span>
                </div>
                <div className={styles.cart__totalPrice}>
                  <span>Total Price: ${item.totalPrice}</span>
                </div>
              </li>
            ))
          ) : (
            <section className={styles.cart__emptyBlock}>
              <img src={cartImg} alt="Cart is empty" />
              <p className={styles.cart__empty}>Your cart is empty...</p>
            </section>
          )}
          {cart.length > 0 && (
            <div className={styles.cart__totalSum}>
              <span>Total Sum: ${totalSum}</span>
            </div>
          )}
        </ul>
      </section>
      {isModalOpen && <ModalWindow onClose={closeModal}></ModalWindow>}
    </main>
  );
};
export default CartComponents;
