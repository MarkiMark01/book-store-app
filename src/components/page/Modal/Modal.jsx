import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import gift from "../../../Assets/booksImg/thanks.jpg";

const modalRoot = document.querySelector("#modal-root");

export default function ModalWindow({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.modal__backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal__content}>
        <div className={styles.modal__giftBox}>
          <img src={gift} alt="Gift" className={styles.gift} />
          <button className={styles.modal__ok} onClick={handleBackdropClick}>
            Ok
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
