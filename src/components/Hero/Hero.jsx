import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img 
        src={getImageUrl("hero/hero1.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.space}></div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Darshit Joshi</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 year of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
        <div className={styles.btn}>
        <a href="mailto:mailDarshit05@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a className={styles.contactBtn} href="https://drive.google.com/file/d/1C_H-t1Ran7MXy_f8SRwb8fiGC2tE-tZF/view?usp=sharing" target="_blank">
        Resume
      </a>

        </div>
      </div>
      
      
    </section>
  );
};
