import React from "react";
import { useSelector } from "react-redux";
import { selectProblem } from "./problemsSlice";
import styles from "./OurDesign.module.css";
import Card from "../../components/cards/Card";

const OurDesign = () => {
  const problem = useSelector(selectProblem);

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
