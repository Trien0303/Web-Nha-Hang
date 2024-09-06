import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import các icon từ Font Awesome

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <Image src="/images/logo2.jpg" alt="Logo" width={100} height={100} />
        </div>

        <div className={styles.infoSection}>
          <h2>Liên Hệ</h2>
          <p>123 Đường Nhà Hàng, TP. Gourmet</p>
          <p>Email: info@gourmetmasterpieces.com</p>
          <p>Điện thoại: (123) 456-7890</p>
        </div>

        <div className={styles.linksSection}>
          <h2>Liên Kết</h2>
          <ul>
            <li><Link href="/about">Về Chúng Tôi</Link></li>
            <li><Link href="/menu">Thực Đơn</Link></li>
            <li><Link href="/services">Dịch Vụ</Link></li>
          </ul>
        </div>

        <div className={styles.socialSection}>
          <h2>Theo Dõi Chúng Tôi</h2>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} className={styles.icon} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Gourmet Masterpieces. All rights reserved.</p>
      </div>
    </footer>
  );
}
