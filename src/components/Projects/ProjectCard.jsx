/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />

        <div className={styles.cardContent}>
          <h3 className={styles.title}>{title}</h3>

          <p className={styles.description}>
            {showMore ? description : `${description.substring(0, 120)}...`}
          </p>

          {showMore && (
            <div className={styles.moreContent}>
              <h4 className={styles.subheading}>Skills Used:</h4>
              <ul className={styles.skills}>
                {skills.map((skill, id) => (
                  <li key={id} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {description.length > 120 && (
            <button
              className={styles.toggleBtn}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Learn Less" : "Learn More"}
            </button>
          )}

          <div className={styles.links}>
            <a
              href={demo}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
            <a
              href={source}
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
