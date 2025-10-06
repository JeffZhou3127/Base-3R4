import React from "react";
import { useSelector } from "react-redux";
import { selectProblem } from "./problemsSlice";
import styles from "./OurDesign.module.css";
import Card from "../../components/cards/Card";
import ROUTES from "../../app/routes";
import video from "../../assets/dual_use_system_animation.mp4";

const OurDesign = () => {
  const problem = useSelector(selectProblem);
  const { residenceRenovations, cosmicCelebrations, daringDiscoveries } = ROUTES;
  const hrefs = [residenceRenovations, cosmicCelebrations, daringDiscoveries];

  return (
    <section id="design" className={styles.section}>
      <div className={styles.img}></div>
      <h2>Our Design</h2>
      <p className={styles.p}>
        As a solution to the obstacle of space exploration, the difficulty of where inorganic waste produced by
        astronauts should go, we propose a system consisting of three parts. Composed of both leading-age technology and
        pre-launch logistics, our system aims to solve the inevitable problem of waste management on a planet
        220 million miles away.
      </p>
      <div className={styles.container}>
        {problem.map(({ num, name, description }, id) =>
          <Card href={hrefs[id]} key={num} problemNum={num} problemName={name} problemDescription={description} />
        )}
      </div>
      <p className={styles.note}>Click on the cards to see our solution</p>
      <section className={styles.animation}>
        <h3>Animation</h3>
        <p>Here's a quick blender animation of the dual system</p>
        <video src={video} controls>Video not supported</video>
        <article>
          <h4>Explanation</h4>
          <p>
            The pins holding the section that will be folded are pulled out. There is another pin preventing the structure
            from folding. The slab holding the pin in place is released, and then the pin is pulled out. This way, the structure is
            free to fold and form complex shapes (such as furniture).
          </p>
        </article>
      </section>
    </section>
  );
};

export default OurDesign;
