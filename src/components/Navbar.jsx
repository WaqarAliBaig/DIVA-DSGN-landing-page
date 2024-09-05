import React from "react";
import styles from "./Home.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbarLinksContainer}>
      <a href="">Works</a>
      <a href="">Benefits</a>
      <a href="">Process</a>
      <a href="">Pricing</a>
    </nav>
  );
};

export default Navbar;
