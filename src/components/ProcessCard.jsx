import React from "react";
import Card from "react-bootstrap/Card";
import styles from "./Process.module.css";
import Frame_1 from "../assets/images/Process_Page/Frame_1.png";
import Frame_2 from "../assets/images/Process_Page/Frame_2.png";
import Frame_3 from "../assets/images/Process_Page/Frame_3.png";

const ProcessCard = () => {
  return (
    <div className={styles.processCards}>
      {/* Card-1 */}
      <Card className={styles.singleCard}>
        <Card.Img className={styles.image} variant="top" src={Frame_1} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.title}>
            Sign up and make request
          </Card.Title>
          <Card.Text className={styles.text}>
            After completing the sign-up process, you'll be granted access to
            your very own Trello board where you can freely submit endless
            design requests.
          </Card.Text>
        </Card.Body>
      </Card>

      {/* Card-2 */}
      <Card className={styles.singleCard}>
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.title}>Working on design</Card.Title>
          <Card.Text className={styles.text}>
            Our team is committed to gettin' it done, with an impressive
            turnaround time of just 3 working days per request.
          </Card.Text>
        </Card.Body>
        <Card.Img className={styles.image} variant="top" src={Frame_2} />
      </Card>

      {/* Card-3 */}
      <Card className={styles.singleCard}>
        <Card.Img className={styles.image} variant="top" src={Frame_3} />
        <Card.Body className={styles.cardBody}>
          <Card.Title className={styles.title}>
            Sign up and make request
          </Card.Title>
          <Card.Text className={styles.text}>
            After completing the sign-up process, you'll be granted access to
            your very own Trello board where you can freely submit endless
            design requests.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProcessCard;
