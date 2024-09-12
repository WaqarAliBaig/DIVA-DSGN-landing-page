import React from "react";
import styles from "./FAQ.module.css";
import { MdExpandMore } from "react-icons/md";
import useOpenController from "./useOpenController";

const Accordian = ({ section, key }) => {
  const { isOpen, toggle } = useOpenController(false);

  return (
    <div className={styles.accordianContainer}>
      <ExpendableColumn
        question={section.question}
        isOpen={isOpen}
        toggle={toggle}
      />
      {isOpen && <TextSection text={section.answer} />}
      <div className={styles.underline}></div>
    </div>
  );
};

export default Accordian;

export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <div className={styles.columnContainer} onClick={toggle}>
      <div className={styles.columnText}>{question}</div>
      <button className={styles.expandableButton}>
        <span>
        <MdExpandMore
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "all 0.25s",
          }}
        /></span>
      </button>
    </div>
  );
};

export const TextSection = ({ text }) => {
  return (
    <div className={styles.textContainer}>
      <div>{text}</div>
    </div>
  );
};
