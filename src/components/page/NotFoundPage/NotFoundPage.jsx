import { NavLink } from "react-router-dom";
import styles from "./stylesNoPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className={styles.nopage}>
      <h2>“Oops, something went wrong... Error 404” 🕵️</h2>
      <section className={styles.nopageLink}>
        <NavLink to="/">Go to books</NavLink>
      </section>
    </div>
  );
};
export default NotFoundPage;
