import React from "react";
import styles from "./SplashImage.module.css";

const SplashImage = () => {
  return (
    <section className={styles.splashImage} id="home">
      <div className={styles.overlay}>
        <div className={styles.div}>
          <h1 className={styles.title}>Base 3R4</h1>
          <p className={styles.description}>The future of recycling on another world</p>
        </div>
      </div>
    </section>
  );
};

export default SplashImage;
