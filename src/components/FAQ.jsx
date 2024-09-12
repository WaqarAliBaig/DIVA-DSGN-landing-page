import React from "react";
import styles from "./FAQ.module.css";
import dataFAQ from "./dataFAQ";
import Accordian from "./Accordian";

const FAQ = () => {
  return (
    <div className={styles.faqOuter}>
      <div className={styles.faqContainer}>
        <div className={styles.faqHead}>
          <h2>Frequently Asked Questions</h2>
          <p>
            These questions might not be on everyone's FAQ list, but we've got
            your back in case you were curious.
          </p>
          {dataFAQ.map((section, index) => (
            <Accordian key={index} section={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
