import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./FooterCards.module.css";
import vectorFooter_1 from "../assets/images/Footer_Page/VectorFooter-1.png";
import vectorFooter_2 from "../assets/images/Footer_Page/VectorFooter-2.png";
import vectorFooter_3 from "../assets/images/Footer_Page/VectorFooter-3.png";
import vectorFooter_4 from "../assets/images/Footer_Page/VectorFooter-4.png";

const FooterCards = () => {
  const vectorFooterCards = [
    {
      image: vectorFooter_1,
      title: "Works",
      text: "a design wizard that delivers top-notch masterpieces whenever you crave it!",
    },
    {
      image: vectorFooter_2,
      title: "Benefits",
      text: "You will get stress-free design like magic, delivering consistent quality at a steady price.",
    },
    {
      image: vectorFooter_3,
      title: "Process",
      text: "You can effortlessly throw in, organize, and keep tabs on all your requests using your very own Trello board.",
    },
    {
      image: vectorFooter_4,
      title: "Pricing",
      text: "No shady charges no unexpected shocks! stick to one flat fee, month after month.",
    },
  ];

  const renderFooterCards = (card, index) => {
    return (
      <div className={styles.singleCard}>
        <Card style={{ width: "23rem" }} key={index}>
          <Card.Img className={styles.img} variant="top" src={card.image} />
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
      {vectorFooterCards.map(renderFooterCards)}
    </div>
  );
};

export default FooterCards;
