/* eslint-disable react/no-unescaped-entities */
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <h4 className={styles.About}>A qualified Full-Stack Software Engineer with professional training from ALX Software Engineering<a href="https://www.linkedin.com/company/alxafrica/"> (alx_africa)</a>. Proficient in both front-end and back-end development, with extensive experience in backend technologies. Skilled in Python and JavaScript, I bring a strong understanding of software development practices, architecture, and problem-solving. I am passionate about building scalable, efficient, and maintainable applications, with a keen focus on delivering quality code and user-centric solutions.</h4>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/knowing.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
