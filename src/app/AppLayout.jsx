import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ROUTES from "./routes";
import styles from "./AppLayout.module.css";

const AppLayout = () => {
  return (
    <>
      <header className={styles.header}>
        {/* Spells out Martian Revolutionizers */}
        <Link to={ROUTES.homepage} className={styles.Link}>
          <span className={styles.capitalizedLetter}>R</span>
          <span className={styles.martian}>Martian</span>
          <span className={styles.evolutionizers}>evolutionizers</span>
        </Link>
        <nav>
          <ul className={styles.ul}>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Mission</Link>
            </li>
            <li>
              <Link>Design</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Outlet />
        <footer className={styles.footer}>
          <h2>Project by Peiqi Zhou, Jiawei Li, Samuel Lin, Ada Lin</h2>
          <p>&copy;Peiqi Zhou, 2025</p>
        </footer>
      </main>
    </>
  );
};

export default AppLayout;
