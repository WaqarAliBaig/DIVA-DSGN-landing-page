import React from "react";
import styles from "./Cards.module.css";
import card_1 from "../assets/cards/Card-1.png";
import card_2 from "../assets/cards/Card-2.png";
import card_3 from "../assets/cards/Card-3.png";
import card_4 from "../assets/cards/Card-4.png";
import card_5 from "../assets/cards/Card-5.png";
import card_6 from "../assets/cards/Card-6.png";
import card_7 from "../assets/cards/Card-7.png";
import card_8 from "../assets/cards/Card-8.png";
import card_9 from "../assets/cards/Card-9.png";
import card_10 from "../assets/cards/Card-10.png";
import card_11 from "../assets/cards/Card-11.png";
import card_12 from "../assets/cards/Card-12.png";

const Cards = () => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardInner}>
        <div className={styles.cardRow}>
          <img className={styles.cardColumn} src={card_1} alt="" />
          <img className={styles.cardColumn} src={card_2} alt="" />
          <img className={styles.cardColumn} src={card_3} alt="" />
          <img className={styles.cardColumn} src={card_4} alt="" />
          <img className={styles.cardColumn} src={card_5} alt="" />
          <img className={styles.cardColumn} src={card_6} alt="" />
          <img className={styles.cardColumn} src={card_7} alt="" />
          <img className={styles.cardColumn} src={card_8} alt="" />
          <img className={styles.cardColumn} src={card_9} alt="" />
          <img className={styles.cardColumn} src={card_10} alt="" />
          <img className={styles.cardColumn} src={card_11} alt="" />
          <img className={styles.cardColumn} src={card_12} alt="" />
        </div>
        <div className={styles.cardButton}>
          <button>View recent works</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
