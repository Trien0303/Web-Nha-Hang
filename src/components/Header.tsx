// src/components/Header.tsx

import Link from 'next/link';
import Image from 'next/image'; // Import Image từ next/image
import styles from '../styles/Header.module.css'; // Import CSS cho Header

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
    </div>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/" className={styles.navLink}>Home</Link></li>
        <li className={styles.navItem}><Link href="/menu" className={styles.navLink}>Menu</Link></li>
        <li className={styles.navItem}><Link href="/blog" className={styles.navLink}>Blog</Link></li>
        <li className={styles.navItem}><Link href="/contact" className={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
