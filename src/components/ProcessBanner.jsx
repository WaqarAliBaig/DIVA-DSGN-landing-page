import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "./ProcessBanner.module.css";

function ProcessBanner() {
  return (
    <Card className={styles.banner}>
      <Card.Body className={styles.bannerBody}>
        <Card.Title className={styles.bannerTitle}>
          We'll join your squad, putting the collab in collaboration.
        </Card.Title>
        <Card.Text className={styles.bannerText}>
          Manage your requests like a boss with our oh-so-fabulous feature.
        </Card.Text>
        <Button className={styles.bannerButton}>Book 15-min call</Button>
      </Card.Body>
    </Card>
  );
}

export default ProcessBanner;
