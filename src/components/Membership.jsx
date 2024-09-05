import React from "react";
import figma from "../assets/images/membership_Page/Figma svg.svg";
import framer from "../assets/images/membership_Page/Framer svg.svg";
import webflow from "../assets/images/membership_Page/Webflow - png.png";
import U18 from "../assets/images/membership_Page/U18.png";
import dribble from "../assets/images/membership_Page/Dribble svg.svg";
import styles from "./Membership.module.css";
import MembershipCards from "./MembershipCards";

const Membership = () => {
  return (
    <div className={styles.membershipSection}>
      <div className={styles.membershipContainer}>
        {/* Frame-1 */}
        <div className={styles.membershipInner1}>
          <div className={styles.textSection}>
            <p>Our works has been featured by</p>
          </div>
          <div className={styles.logos}>
            <img src={figma} alt="figma-image" />
            <img src={framer} alt="framer-image" />
            <img src={webflow} alt="webflow-image" />
            <img src={U18} alt="U18-image" />
            <img src={dribble} alt="dribble-image" />
          </div>
        </div>
        {/* Frame-1 */}

        {/* Frame-2 */}
        <div className={styles.membershipInner2}>
          <div className={styles.paragraphSection}>
            <h2>Awesome Membership Perks</h2>
            <p>
              With a DIVADSGN subscription, you'll get stress-free design like
              magic, delivering consistent quality at a steady price.
            </p>
          </div>
          <MembershipCards />
        </div>
        {/* Frame-2 */}
      </div>
    </div>
  );
};

export default Membership;
