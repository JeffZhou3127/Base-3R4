import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSolutions } from "./solutionsSlice";
import ROUTES from "../../app/routes";
import styles from "./Solutions.module.css";

const Solutions = () => {
  const solutions = useSelector(selectSolutions);
  const { solutionTitle } = useParams();
  window.scroll(0, 0);
  const solution = solutions.find(({ solutionName }) => solutionName === solutionTitle);
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

  const getbenifits = (item) => {
    console.log(item);
    return "<p className={styles.text}>" + item + "</p>";
  };
  return (
    
    <section className={styles.solutions}>
      <div className={styles.overlay}>
        {/* Display all the data from solutions (check ./solutionsSlice for the object keys) */}
        <h2 className={styles.title}>{solution.solutionName}</h2>
        <p className={styles.text}>{solution.solutionDetails}</p>
        <h2 className={styles.title}>Solution</h2>
        <p className={styles.text}>{solution.solution}</p>
        <h2 className={styles.title}>Benefits</h2>
        <div>
          {solution.benefits.map((benefit) =>
            <p className={styles.p}>{benefit}</p>
          )}
        </div>
        <div className={styles.button}>
        <Link className={styles.back} to={ROUTES.homepage}>Back</Link>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
