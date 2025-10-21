/* eslint-disable react/no-unescaped-entities */
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <h4 className={styles.About}>
        <p>
          A qualified Full-Stack Software Engineer with professional training
          from ALX (powered by Holberton Inc) and additional backend
          specialization through Udemy courses in C# and .NET technologies.
          Skilled in both front-end and back-end development, with solid
          experience in Python, JavaScript, and C#. I have a strong
          understanding of software architecture, development practices, and
          problem-solving. I’m passionate about building scalable, efficient,
          and maintainable applications that deliver excellent user experiences
          and reliable performance.
        </p>
      </h4>
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
