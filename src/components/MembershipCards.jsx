import React from "react";
import vector_1 from "../assets/images/membership_Page/Vector-1.png";
import vector_2 from "../assets/images/membership_Page/Vector-2.png";
import vector_3 from "../assets/images/membership_Page/Vector-3.png";
import vector_4 from "../assets/images/membership_Page/Vector-4.png";
import vector_5 from "../assets/images/membership_Page/Vector-5.png";
import vector_6 from "../assets/images/membership_Page/Vector-6.png";
import Card from "react-bootstrap/Card";
import styles from "./MembershipCards.module.css";

function MembershipCards() {
  const vectorCards = [
    {
      image: vector_1,
      title: "Top Quality",
      text: "a design wizard that delivers top-notch masterpieces whenever you crave it!",
    },
    {
      image: vector_2,
      title: "Super Speedy",
      text: "Transform your design into review-ready perfection in only a 3-5 business days, on average.",
    },
    {
      image: vector_3,
      title: "Fixed Monthly Rate",
      text: "No more hidden fees or surprise charges - you'll pay the exact same amount every single month.",
    },
    {
      image: vector_4,
      title: "Flexible",
      text: "Upgrade, downgrade, cancel, or hit pause of subscription services, always ready to accommodate your ever-changing needs.",
    },
    {
      image: vector_5,
      title: "Trello Collabs",
      text: "Invite us to your Trello board, and we'll be your ultimate collaboration BFFs. Working alongside you like we're in the same boat.",
    },
    {
      image: vector_6,
      title: "Money-back guarantee",
      text: "We're pretty sure this won't happen, but if it doesn't tickle your fancy within a week, we'll gladly give your money back!",
    },
  ];

  const renderMembershipCards = (card, index) => {
    return (
      <div className={styles.singleCard} key={index}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={card.image} />
          <Card.Body className={styles.cardBody}>
            <Card.Title className={styles.cardTitle}>{card.title}</Card.Title>
            <Card.Text className={styles.cardText}>{card.text}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return (
    <div className={styles.cards}>
      {vectorCards.map(renderMembershipCards)}
    </div>
  );
}

export default MembershipCards;
