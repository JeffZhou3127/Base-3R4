import React from "react";
import styles from "./OurDesign.module.css";
import Card from "../cards/Card";

const problem = [
  {
    num: 1,
    name: "Residence Renovations",
    description:
      "Aluminum structures and the 3-dimensional structure used to inflate Martian habitats are difficult to recycle and reuse in their current form without melting, which is unfeasible on Mars because of its lack of oxygen.",
  },
  {
    num: 2,
    name: "Cosmic Celebrations",
    description:
      "Aluminum structures and the 3-dimensional structure used to inflate Martian habitats are difficult to recycle and reuse in their current form without melting, which is unfeasible on Mars because of its lack of oxygen.",
  },
  {
    num: 3,
    name: "Daring Discoveries",
    description:
      "Pure carbon from oxygen separation projects may not seem to amount to anything useful. We don’t have the capability to transport such advanced technology to space to produce graphite from carbon.",
  },
];

const OurDesign = () => {
  return (
    <section id="design" className={styles.section}>
      <div className={styles.img}></div>
      <h2>Our Design</h2>
      <p className={styles.p}>
        As a solution to the obstacle of space exploration, the difficulty of where inorganic waste produced by
        astronauts should go, we propose a system consisting of three parts. Composed of both leading-age technology and
        pre-launch logistics, our system aims to solve the inevitable problem of waste management on a planet
        220 million miles away.
      </p>
      <div className={styles.container}>
        {problem.map(({ num, name, description }) =>
          <Card key={num} problemNum={num} problemName={name} problemDescription={description} />
        )}
      </div>
      <p className={styles.note}>Click on the cards to see our solution</p>
    </section>
  );
};

export default OurDesign;
