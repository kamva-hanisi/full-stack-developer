/* eslint-disable react/no-unescaped-entities */
import styles from "./Hero.module.css";
import kay from "../../../assets/hero/Kay circle.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Hi, I'm Kamva Hanisi</span>
        </h1>
        <p className={styles.description}>
          I'm a full-stack developer from ALX (powered by Holberton Inc), with
          additional training from Udemy — where I specialized in Back-end
          development using C#, .NET Core, and modern frameworks.
        </p>
        <a href="mail to:lucashanisi@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={kay} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
