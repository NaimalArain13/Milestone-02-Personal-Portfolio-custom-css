"use client";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { useEffect } from "react";
import styles from "../CssModules/projectcard.module.css";

interface Props {
  title: string;
  description: string;
  img: string;
  route: string;
}

export default function ProjectCard({ prop }: { prop: Props }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className={`${styles.projectCard}`}
      data-aos="fade-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="1500"
    >
      <div className={styles.dotContainer}>
        <p className={styles.dotIcon}>
          <GoDotFill />
        </p>
        <p className={styles.dotIcon}>
          <GoDotFill />
        </p>
        <p className={styles.dotIcon}>
          <GoDotFill />
        </p>
      </div>

      <Image
        src={`${prop.img}`}
        alt=""
        height={0}
        width={1440}
        className={styles.projectImage}
      />

      <Link href={prop.route} className={styles.linkWrapper}>
        <div className={styles.contentWrapper}>
          <div className="pb-3 space-y-2">
            <h1 className={styles.title}>{prop.title}</h1>
            <p className={styles.description}>{prop.description}</p>
          </div>
          <div className={styles.arrowWrapper}>
            <MdArrowOutward className={styles.arrowIcon} />
          </div>
        </div>
      </Link>
    </div>
  );
}
