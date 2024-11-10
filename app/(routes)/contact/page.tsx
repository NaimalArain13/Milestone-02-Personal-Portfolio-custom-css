import Link from "next/link";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contactContainer}>
      <div>
        <h1 className={styles.heading}>Contact Me</h1>
      </div>
      <div className={styles.flexContainer}>
        <div
          className={styles.contactCard}
          data-aos="flip-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <div className={styles.innerContainer}>
            <Link href="mailto:naimalarain13@gmail.com">
              <button className={styles.button}>
                <p>Get in Touch</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
