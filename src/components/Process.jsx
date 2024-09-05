import React from "react";
import styles from "./Process.module.css";
import ProcessCard from "./ProcessCard";
import ProcessBanner from "./ProcessBanner";

const Process = () => {
  return (
    <div className={styles.processSection}>
      <div className={styles.processContainer}>
        <div className={styles.processContent}>
          <h2>How does DIVADSGN work?</h2>
          <p>
            You can effortlessly throw in, organize, and keep tabs on all your
            requests using your very own Trello board.
          </p>
        </div>
        <ProcessCard />
        <ProcessBanner />
      </div>
    </div>
  );
};

export default Process;
