import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ problemNum, problemName, problemDescription }) => {
  return (
    <Link className={styles.cards}>
      <h3 className={styles.h3}>Problem {problemNum}<span>: {problemName}</span></h3>
      <p className={styles.p}>{problemDescription}</p>
    </Link>
  );
};

export default Card;
