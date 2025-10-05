import React from "react";
import { Link } from "react-router-dom";
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
      <div className={styles.container}>
        <Link className={styles.cards}>
          <h3>Problem 1: <span>Residence Renovations</span></h3>
          <p>
            Aluminum structures and the 3-dimensional structure used to inflate Martian habitats are difficult to recycle and
            reuse in their current form without melting, which is unfeasible on Mars because of its lack of oxygen.
          </p>
        </Link>
        <Link className={styles.cards}>
          <h3>Problem 2: <span>Cosmic Celebrations</span></h3>
          <p>
            Plastics like Ethylene-Vinyl Acetate (EVA) waste and Polymer Matrix Composites are difficult to break up and recycle
            because of their robust and reinforced molecular crosslinked systems.
          </p>
        </Link>
        <Link className={styles.cards}>
          <h3>Problem 3: <span>Daring Discoveries</span></h3>
          <p>
            Pure carbon from oxygen separation projects may not seem to amount to anything useful.
            We don’t have the capability to transport such advanced technology to space to produce graphite from carbon.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default OurDesign;
