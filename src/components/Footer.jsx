import React from "react";
import styles from "./Footer.module.css";
import facebook from "../assets/images/Facebook.png";
import twitter from "../assets/images/Twitter.png";
import instagram from "../assets/images/Instagram.png";
import dribbble from "../assets/images/Dribbble.png";
import behance from "../assets/images/Behance.png";
import FooterCards from "./FooterCards";
import logo from "../assets/images/Logo.svg";

const Footer = () => {
  return (
    <div className={styles.footerOuter}>
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerText}>
            <div className={styles.text1}>
              Copyright © 2023 DIVADSGN. All rights reserved
            </div>
            <div className={styles.text2}>Privacy Policy</div>
            <div className={styles.text3}>Terms of Use</div>
          </div>
          <div className={styles.footerIcons}>
            <div>
              <img src={facebook} alt="" />
            </div>
            <div>
              <img src={twitter} alt="" />
            </div>
            <div>
              <img src={instagram} alt="" />
            </div>
            <div>
              <img src={dribbble} alt="" />
            </div>
            <div>
              <img src={behance} alt="" />
            </div>
          </div>
        </div>
        <FooterCards />
      </div>
      <img className={styles.logo} src={logo} alt="" />
    </div>
  );
};

export default Footer;
