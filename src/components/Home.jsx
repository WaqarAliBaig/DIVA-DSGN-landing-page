import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/images/Logo.svg";
import sand_clock from "../assets/images/Sand-clock.png";
import styles from "./Home.module.css";
import Cards from "./Cards";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <div className={styles.homeSection}>
        <div className={styles.homeBannerContainer}>
          <div className={styles.homeBannerImageContainer}>
            <img src={logo} alt="logo" />
          </div>
          <h5 className={styles.primaryHeading}>
            One fixed fee a month gets you unlimited design goodness.
          </h5>
          <p className={styles.primaryText}>
            Feel free to ask for changes a bazillion times —we've got you
            covered!
          </p>
          <div className={styles.homeButton}>
            <button>Book 15-min call</button>
          </div>
          <div className={styles.clock}> 
            <img src={sand_clock} alt="sand-clock" />
            <p>2 slots remaining</p>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
};

export default Home;
