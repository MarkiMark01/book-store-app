import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import items from "./items";
import styles from "./stylesModHead.module.scss";

const modalRoot = document.querySelector("#modal-root");

export default function ModalHeader({ onClose }) {
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

  const getClassName = ({ isActive }) => {
    const className = isActive
      ? `${styles.link} ${styles.active}`
      : styles.link;
    return className;
  };

  const elements = items.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return createPortal(
    <section className={styles.modal__backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal__content}>
        <nav>
          <ul className={styles.nav}>{elements}</ul>
        </nav>
      </div>
    </section>,
    modalRoot
  );
}
