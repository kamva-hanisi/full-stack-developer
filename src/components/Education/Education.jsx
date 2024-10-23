import React from "react";

import styles from "./Education.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="Education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id,) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img src={getImageUrl(historyItem.imageSrc)} alt="" />
                <div className={styles.historyItemDetails}>
                  <h3>{historyItem.role}</h3>
                  <p>{historyItem.year}</p>
                  
                  <ul>
                    {historyItem.Education.map((Education, id) => {
                      return <li key={id}>{Education}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.certificateBtn}>
        <a href="https://drive.google.com/file/d/1BR8bsVK33j-f_OVJel8-Uxojqr_FLo06/view?usp=sharing">ALX-Cetificate</a>
      </div>
    </section>
  );
};
