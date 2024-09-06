import Link from 'next/link';
import styles from '../styles/Header.module.css'; // Import CSS cho Header

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <h1><Link href="/">Gourmet Masterpieces</Link></h1>
    </div>
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={styles.navItem}><Link href="/" className={styles.navLink}>Home</Link></li>
        <li className={styles.navItem}><Link href="/about" className={styles.navLink}>About</Link></li>
        <li className={styles.navItem}><Link href="/blog" className={styles.navLink}>Blog</Link></li>
        <li className={styles.navItem}><Link href="/contact" className={styles.navLink}>Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
