import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <Image
            src="/images/logo2.jpg" // Đổi thành đường dẫn đến logo của bạn
            alt="Gourmet Masterpieces Logo"
            width={300}
            height={300}
          />
        </div>

        <div className={styles.infoSection}>
          <h2>Liên Hệ</h2>
          <p>Địa chỉ: 123 Đường Thực Phẩm, Thành phố Ẩm Thực</p>
          <p>Điện thoại: (012) 345-6789</p>
          <p>Email: contact@gourmetmasterpieces.com</p>
        </div>

        <div className={styles.linksSection}>
          <h2>Liên Kết Nhanh</h2>
          <ul>
            <li><Link href="/">Trang Chủ</Link></li>
            <li><Link href="/menu">Thực Đơn</Link></li>
            <li><Link href="/about">Về Chúng Tôi</Link></li>
            <li><Link href="/contact">Liên Hệ</Link></li>
          </ul>
        </div>

        <div className={styles.socialSection}>
          <h2>Kết Nối Với Chúng Tôi</h2>
          <ul>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          </ul>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Gourmet Masterpieces. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
