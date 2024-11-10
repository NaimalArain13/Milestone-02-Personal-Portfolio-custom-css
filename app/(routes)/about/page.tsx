"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import styles from "./about.module.css";

export default function About() {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className={styles.aboutContainer}>
      <div>
        <h1 className={styles.heading}>About Me</h1>
      </div>
      <div>
        <div className={styles.flexContainer}>
          <div
            className={styles.imageContainer}
            data-aos="flip-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <div className={styles.imageInner}>
              <Image
                src={"/dp.jpg"}
                alt="Profile Picture"
                width={150}
                height={0}
                className={styles.profileImage}
              />
            </div>
          </div>
          <div
            className={styles.textContainer}
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <p className={styles.descriptionText}>
              I am Naimal Salahuddin.
              <br />
              <br />
              I&#39;m a front-end developer passionate about crafting user-friendly
              web interfaces. Over the past 1.5 years, I&#39;ve been learning and
              refining my skills in front-end technologies through various
              hands-on projects. I have a foundational understanding of AI too,
              having completed a basic course in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
