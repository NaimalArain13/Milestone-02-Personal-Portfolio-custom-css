import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import styles from "../CssModules/heroSection.module.css"; // Import the custom CSS module
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className={`${styles.heroSection}`}>
      {/* Button with Typewriter Text */}
      <div className={styles.buttonContainer}>
        <button className={styles.heroButton}>
          <p className={styles.dotIcon}>
            <GoDotFill />
          </p>
          <p className={styles.typewriter}>
            It&#39;s me <b>Naimal Salahuddin</b>
          </p>
        </button>
      </div>

      {/* Profile Image */}
      <div className={styles.imageContainer}>
        <Image
          src={"/dp.jpg"} // Make sure the image path is correct
          width={70}
          height={70} // Define height to maintain aspect ratio
          alt="Naimal Salahuddin"
          className={styles.profileImage}
        />
      </div>

      {/* Main Heading */}
      <div className={styles.textContainer}>
        <p className={styles.mainHeading}>
          Designing Websites
          <br />
          that drive Conversions
        </p>
      </div>

      {/* Sub Heading */}
      <div className={styles.textContainer}>
        <p className={styles.subHeading}>
          <b>AIM</b> to Design and develop visually stunning
          <br />
          and technically proficient websites for
          <br />
          clients worldwide.
        </p>
      </div>

      {/* Email Button */}
      <div className={styles.emailButtonContainer}>
        <Link href={"mailto:naimalarain13@gmail.com"} className={styles.emailButton}>
          naimalarain13@gmail.com
        </Link>
      </div>
    </div>
  );
}
