import React from "react";
import styles from "./About.module.css";
import AboutCards from "./AboutCards";
import leftArrow from "../assets/images/About_Page/Left.png";
import rightArrow from "../assets/images/About_Page/Right.png";

const About = () => {
  return (
    <div className={styles.aboutUs}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeading}>
          <h2>What clients say about us</h2>
        </div>
        <AboutCards />
        <div className={styles.arrowImg}>
          <img src={leftArrow} alt="" />
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
