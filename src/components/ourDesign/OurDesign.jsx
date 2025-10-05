import React from "react";
import styles from "./OurDesign.module.css";
import marsJezeroCraterJpg from "../../assets/mars_jezero_crater.jpg";

const OurDesign = () => {
  return (
    <section id="design" className={styles.section}>
      <div className={styles.img}></div>
      <h2>Our Design</h2>
      <p>
        As a solution to the obstacle of space exploration, the difficulty of where inorganic waste produced by
        astronauts should go, we propose a system consisting of three parts. Composed of both leading-age technology and
        pre-launch logistics, our system aims to solve the inevitable problem of waste management on a planet
        220 million miles away.
      </p>
    </section>
  );
};

export default OurDesign;
