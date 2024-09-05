import React from "react";
import styles from "./Pricing.module.css";
import PricingCards from "./PricingCards";

const Pricing = () => {
  return (
    <div className={styles.pricing}>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Plans & Pricing</h2>
          <p className={styles.text}>
            No shady charges, no unexpected shocks! Stick to one flat fee, month
            after month. No money surprises here!
          </p>
        </div>
      </div>
      <PricingCards />
    </div>
  );
};

export default Pricing;
