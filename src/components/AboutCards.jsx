import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./About.module.css";
import Ellipse_1 from "../assets/images/About_Page/Ellipse-1.png";
import Ellipse_2 from "../assets/images/About_Page/Ellipse-2.png";
import Ellipse_3 from "../assets/images/About_Page/Ellipse-3.png";
import { FaStar } from "react-icons/fa";

const AboutCards = () => {
  const AboutCard = [
    {
      title: "Collaborating with DIVADSGN was an absolute delight!",
      text: "Their team's boundless creativity and meticulousness went above and beyond our wildest expectations.",
      image: Ellipse_1,
      name: "Jason Dom",
      designation: "Startup Founder",
      rating: "",
    },
    {
      title: "Absolutly mind-blowing skills and absolute professionalism!",
      text: "They absolutly skyrocketed our project with their groundbreaking ideas and impeccable implimentation.",
      image: Ellipse_2,
      name: "Michella Carter",
      designation: "Startup Founder",
      rating: "",
    },
    {
      title: "Kudos to the design agency for their outstanding work!",
      text: "Their dedication to excellence and innovation was evident from the very first brainstorming session to the final masterpiece.",
      image: Ellipse_3,
      name: "Rob Jackson",
      designation: "Entrepreneurs",
      rating: "",
    },
  ];

  const renderAboutCards = (card, index) => {
    return (
      <div className={styles.aboutSingleCardContainer} key={index}>
        <Card style={{ width: "15rem" }} className={styles.aboutSingleCard}>
          <Card.Body className={styles.aboutCardBody}>
            <Card.Title className={styles.aboutCardTitle}>
              {card.title}
            </Card.Title>
            <Card.Text className={styles.aboutCardText}>{card.text}</Card.Text>
          </Card.Body>
          <div className={styles.aboutCardContent}>
            <Card.Img variant="top" src={card.image} />
            <Card.Text className={styles.name}>{card.name}</Card.Text>
            <Card.Text className={styles.designation}>
              {card.designation}
            </Card.Text>
            <div className={styles.star}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className={styles.aboutCards}>{AboutCard.map(renderAboutCards)}</div>
  );
};

export default AboutCards;
