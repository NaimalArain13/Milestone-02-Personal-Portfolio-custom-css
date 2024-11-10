"use client";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "../CssModules/navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className="flex items-center space-x-4 justify-between">
          <h1 className={styles.logo}>NA</h1>
        </div>
      </Link>

      {/* Hidden on mobile, shown on larger screens */}
      <nav className={styles.navLinks}>
        <ul className={styles.navLinks}>
          <Link href="#project" className={styles.navItem}>Projects</Link>
          <Link href="#about" className={styles.navItem}>Info</Link>
          <Link href="#contact" className={styles.navItem}>Contact Me</Link>
        </ul>
      </nav>

      {/* Menu button for mobile view */}
      <div className={styles.menuButton}>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className={styles.mobileMenu}>
          <ul className={styles.mobileNavLinks}>
            <li><Link href="#project" className={styles.navItem}>Projects</Link></li>
            <li><Link href="#about" className={styles.navItem}>Info</Link></li>
            <li><Link href="#contact" className={styles.navItem}>Contact Me</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
