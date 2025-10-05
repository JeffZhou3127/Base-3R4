import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectSolutions } from "./solutionsSlice";
import ROUTES from "../../app/routes";
import styles from "./Solutions.module.css";

const Solutions = () => {
  const solutions = useSelector(selectSolutions);
  const { solutionTitle } = useParams();

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

  return (
    <section>
      {/* Display all the data from solutions (check ./solutionsSlice for the object keys) */}
    </section>
  );
};

export default Solutions;
