import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import styles from "../CssModules/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Contact Information */}
        <div className={styles.contactInfo}>
          <div>
            <p className="hidden md:block">
              Interested in working with me? Send me a message at{" "}
              <button className={styles.emailButton}>
                naimalarain13@gmail.com
              </button>
            </p>
            <button className={`${styles.emailButton} md:hidden`}>
              naimalarain13@gmail.com
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className={`${styles.navLinks} ${styles.navLinksFlex}`}>
          <Link href="/about" className="hover:scale-95">
            About
          </Link>
          <Link href="/project" className="hover:scale-95">
            Project
          </Link>
          <Link href="/contact" className="hover:scale-95">
            Contact
          </Link>
        </div>

        {/* Logo or Image */}
        <div className="flex justify-center">
          <Image
            src="/dp.jpg"
            alt="Footer Image"
            width={50}
            height={50}
            className={styles.logoImage}
          />
        </div>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <Link
            href="//www.facebook.com/profile.php?id=100081783813071"
            aria-label="Facebook"
            className={styles.socialLinkHover}
          >
            <FaFacebook />
          </Link>
          <Link
            href="//www.linkedin.com/in/naimal-arain-/"
            aria-label="LinkedIn"
            className={styles.socialLinkHover}
          >
            <FaLinkedin />
          </Link>
          <Link
            href="//github.com/NaimalArain13"
            aria-label="GitHub"
            className={styles.socialLinkHover}
          >
            <FaGithub />
          </Link>
        </div>

        {/* Copyright Information */}
        <div className={styles.copyright}>
          All rights reserved. &copy; Copyright{" "}
          <Link href="/">Naimal Salahuddin</Link> 2024
        </div>
      </div>
    </footer>
  );
}
