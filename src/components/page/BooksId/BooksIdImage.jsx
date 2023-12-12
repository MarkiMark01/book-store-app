import React, { useEffect } from "react";
import book1 from "../../../Assets/booksImg/1.jpg";
import book2 from "../../../Assets/booksImg/2.jpg";
import book3 from "../../../Assets/booksImg/3.jpg";
import book4 from "../../../Assets/booksImg/4.jpg";
import book5 from "../../../Assets/booksImg/5.jpg";
import book6 from "../../../Assets/booksImg/6.jpg";
import book7 from "../../../Assets/booksImg/7.jpg";
import book8 from "../../../Assets/booksImg/8.jpg";
import book9 from "../../../Assets/booksImg/9.jpg";
import book10 from "../../../Assets/booksImg/10.jpg";
import book11 from "../../../Assets/booksImg/11.jpg";
import book12 from "../../../Assets/booksImg/12.jpg";
import book13 from "../../../Assets/booksImg/13.jpg";
import book14 from "../../../Assets/booksImg/14.jpg";
import book15 from "../../../Assets/booksImg/15.jpg";
import book16 from "../../../Assets/booksImg/16.jpg";
import book17 from "../../../Assets/booksImg/17.jpg";
import book18 from "../../../Assets/booksImg/18.jpg";
import book19 from "../../../Assets/booksImg/19.jpg";
import book20 from "../../../Assets/booksImg/20.jpg";
import book21 from "../../../Assets/booksImg/21.jpg";
import styles from "./styles.BookId.module.scss";

const BooksImageId = ({ bookData }) => {
  const imageMap = {
    1: book1,
    2: book2,
    3: book3,
    4: book4,
    5: book5,
    6: book6,
    7: book7,
    8: book8,
    9: book9,
    10: book10,
    11: book11,
    12: book12,
    13: book13,
    14: book14,
    15: book15,
    16: book16,
    17: book17,
    18: book18,
    19: book19,
    20: book20,
    21: book21,
  };

  const imageSource = bookData ? imageMap[bookData.id] : null;

  useEffect(() => {
    if (imageSource) {
      const img = new Image();
      img.src = imageSource;
    }
  }, [imageSource]);

  return (
    <>
      {imageSource && (
        <img
          src={imageSource}
          alt={bookData?.title || "Book Image"}
          className={styles.books__idImg}
        />
      )}
    </>
  );
};

export default BooksImageId;
