import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ href, problemNum, problemName, problemDescription }) => {
  return (
    <Link to={href} className={styles.card}>
      <h3 className={styles.h3}>Problem {problemNum}<span>: {problemName}</span></h3>
      <p className={styles.p}>{problemDescription}</p>
    </Link>
  );
};

export default Card;
