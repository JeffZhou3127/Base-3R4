import React from "react";
import styles from "./Homepage.module.css";

const Homepage = () => {return (
  <section className={styles.SplashImage}>
    <div className={styles.overlay}>
      <div>
        <h1 className={styles.Title}>Base 3R4</h1>
        <p className={styles.Des}>The future of recycling on another world</p>
      </div>
    </div>
  </section>
)};

export default Homepage;
