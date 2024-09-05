import React from "react";
import styles from "./Pricing.module.css";
import check from "../assets/images/check.png";

const PricingCards = () => {
  return (
    <div className={styles.pricingCardContainer}>
      <div className={styles.pricingCard1}>
        <div className={styles.pricingCardInner1}>
          <div className={styles.content1}>
            <h4>Standard</h4>
            <p>
              Experience the excellence of our services with a handful of small
              projects.
            </p>
          </div>
          <div className={styles.content2}>
            <h4>$999/mo</h4>
            <p>Pause or cancel anytime. 7 days money-back guarantee</p>
          </div>
        </div>
        <div className={styles.pricingCardInner2}>
          <ul className={styles.content3}>
            <li>
              <img src={check} />
              One request at a time
            </li>
            <li>
              <img src={check} />
              Two weeks design sprint
            </li>
            <li>
              <img src={check} />
              Unlimited requests & revisions
            </li>
            <li>
              <img src={check} />
              Up to 1 meeting per week
            </li>
            <li>
              <img src={check} />
              Dev ready Figma files
            </li>
            <li>
              <img src={check} />
              Unlimited Stock Photos
            </li>
          </ul>
          <div className={styles.content4}>
            <button>Get Started</button>
          </div>
        </div>
      </div>

      {/* Card-2 */}
      <div className={styles.pricingCard2}>
        <div className={styles.pricingCardInner1}>
          <div className={styles.content1}>
            <h4>
              Premium<span className={styles.label}>POPULAR</span>
            </h4>

            <p>
              Ideal for burgeoning startups seeking continuous design
              assistance.
            </p>
          </div>
          <div className={styles.content2}>
            <h4>$2,999/mo</h4>
            <p>Pause or cancel anytime. 7 days money-back guarantee</p>
          </div>
        </div>
        <div className={styles.pricingCardInner2}>
          <ul className={styles.content3}>
            <li>
              <img src={check} />
              One request at a time
            </li>
            <li>
              <img src={check} />3 -5 business days delivery
            </li>
            <li>
              <img src={check} />
              Unlimited requests & revisions
            </li>
            <li>
              <img src={check} />
              Up to 1 meeting per week
            </li>
            <li>
              <img src={check} />
              Dev ready Figma files
            </li>
            <li>
              <img src={check} />
              Unlimited Stock Photos
            </li>
          </ul>
          <div className={styles.content4}>
            <button>Get Started</button>
          </div>
        </div>
      </div>

      {/* card-3 */}
      <div className={styles.pricingCard3}>
        <div className={styles.pricingCardInner1}>
          <div className={styles.content1}>
            <h4>Premium +</h4>
            <p>
              Ideal choice for agencies that are committed to providing
              top-notch service to their clients.
            </p>
          </div>
          <div className={styles.content2}>
            <h4>$3,499/mo</h4>
            <p>Pause or cancel anytime. 7 days money-back guarantee</p>
          </div>
        </div>
        <div className={styles.pricingCardInner2}>
          <ul className={styles.content3}>
            <li>
              <img src={check} />
              One request at a time
            </li>
            <li>
              <img src={check} />3 -5 business days delivery
            </li>
            <li>
              <img src={check} />
              Unlimited requests & revisions
            </li>
            <li>
              <img src={check} />
              Flexible weekly meetings
            </li>
            <li>
              <img src={check} />
              Dev ready Figma files
            </li>
            <li>
              <img src={check} />
              Unlimited Stock Photos
            </li>
          </ul>
          <div className={styles.content4}>
            <button>Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCards;
