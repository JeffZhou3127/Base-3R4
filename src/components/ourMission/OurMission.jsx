import React from "react";
import styles from "./OurMission.module.css";

const OurMission = () => {
  return (
    <section className={styles.mission} id="mission">
      <h2 className={styles.title}>Our Mission</h2>
      <p className={styles.text}>
        Our mission is to lead the cleanup of Mars, addressing the growing problem of waste.
        Mars is a pristine environment with no known native life, and leaving trash behind risks contamination
        that could harm potential microbial life or compromise future scientific studies. Debris from past missions
        can interfere with research by introducing Earth materials, and it may also pose hazards to future astronauts,
        equipment, or landers. By combining innovation, sustainability, and interplanetary responsibility,
        we aim to ensure that Mars remains a clean and viable frontier for future generations of explorers and settlers.
        As responsible explorers, we have an ethical duty to protect and preserve other worlds,
        just as we strive to do on Earth.
      </p>
    </section>
  );
};

export default OurMission;
