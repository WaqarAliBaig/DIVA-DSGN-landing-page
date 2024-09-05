import React from "react";
import styles from "./FAQ.module.css";
import down from "../assets/images/Down.png";
import up from "../assets/images/Up.png";

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
        </div>

        <div className={styles.faqBody}>
          <div className={styles.faqContent}>
            <div className={styles.faqQ}>
              <p>01 What sort of design services do y'all provide in here?</p>
              <div className={styles.shapeDown}>
                <img src={down} />
              </div>
            </div>

            <div className={styles.faqQ2}>
              <p>
                Is there a cap on the amount of design requests I can throw your
                way?
              </p>
              <div className={styles.shapeUp}>
                <img src={up} />
              </div>
            </div>

            <div className={styles.ansQ2}>
              <p>
                Absolutely not! there's no limit at all! Feel free to send in as
                many design requests as your heart desires.
              </p>
            </div>

            <div className={styles.faqQ}>
              <p>03 When can I expect my designs to be completed?</p>
              <div className={styles.shapeDown}>
                <img src={down} />
              </div>
            </div>

            <div className={styles.faqQ}>
              <p>04 When can I expect my designs to be completed?</p>
              <div className={styles.shapeDown}>
                <img src={down} />
              </div>
            </div>

            <div className={styles.faqQ}>
              <p>05 What software do you use for design?</p>
              <div className={styles.shapeDown}>
                <img src={down} />
              </div>
            </div>

            <div className={styles.faqQ}>
              <p>06 How do I get started with DIVADSGN?</p>
              <div className={styles.shapeDown}>
                <img src={down} />
              </div>
            </div>

            <div className={styles.faqQ}>
              <p>07 What if I don’t like my design?</p>
              <div className={styles.shapeDown}>
                <img src={down} />
              </div>
            </div>

            <div className={styles.faqQ}>
              <p>08 What if I only need one design request?</p>
              <div className={styles.shapeDown}>
                <img src={down} />
              </div>
            </div>

            <div className={styles.faqQ}>
              <p>
                09 Can I get a refund if I’m not satisfied with the service?
              </p>
              <div className={styles.shapeDown}>
                <img src={down} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
