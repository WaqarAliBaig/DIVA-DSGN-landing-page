import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className={styles.navbarLinksContainer}>
      <Link to="membership" spy={true} smooth={true} offset={1} duration={500}>
        Works
      </Link>
      <Link
        to="membershipCards"
        spy={true}
        smooth={true}
        offset={1}
        duration={500}
      >
        Benefits
      </Link>
      <Link to="process" spy={true} smooth={true} offset={1} duration={500}>
        Process
      </Link>
      <Link to="pricing" spy={true} smooth={true} offset={1} duration={500}>
        Pricing
      </Link>
    </nav>
  );
};

export default Navbar;
