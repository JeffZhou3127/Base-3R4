import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSolutions } from "./solutionsSlice";
import ROUTES from "../../app/routes";
import styles from "./Solutions.module.css";

const Solutions = () => {
  const solutions = useSelector(selectSolutions);
  const { solutionTitle } = useParams();

  const solution = solutions[solutionTitle];
  if (!solution) {
    return (
      <section className={styles.errorSection}>
        <div className={styles.overlay}>
          <h2>Error 404</h2>
          <p>Sorry, this is not the planet you are looking for.</p>
          <Link className={styles.link} to={ROUTES.homepage}>Go back to Mars</Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.solutions}>
      <div className={styles.solutionsOverlay}>
        <h2>{solution.name}</h2>
        <h3>Solution</h3>
        <p>{solution.solution}</p>
        <h4 className={styles.firstSolution}>{solution.solutionOneName}</h4>
        <p>{solution.solutionOneDetails}</p>
        <h5>Benefits</h5>
        <p>{solution.solutionOneBenefits}</p>
        <h4>{solution.solutionTwoName}</h4>
        <p>{solution.solutionTwoDetails}</p>
        <h5>Benefits</h5>
        <p>{solution.solutionTwoBenefits}</p>
        <Link className={styles.backLink} to={ROUTES.homepage}>Back to Home</Link>
      </div>
    </section>
  );
};

export default Solutions;
