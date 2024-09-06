import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';  // Import Header

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Thêm Header */}
      <Header />

      {/* Giới thiệu */}
      <section className={styles.aboutSection}>
        <h2>Về chúng tôi</h2>
        <p>
          Tại Gourmet Masterpieces, chúng tôi mang đến một trải nghiệm ẩm thực độc đáo, kết hợp nghệ thuật nấu ăn tinh tế
          cùng những nguyên liệu cao cấp để tạo ra các món ăn đáng nhớ.
        </p>
      </section>

      {/* Dịch vụ */}
      <section className={styles.servicesSection}>
        <h2>Dịch vụ của chúng tôi</h2>
        <div className={styles.servicesGrid}>
          <div className={styles.serviceItem}>
            <h3>Nhà hàng sang trọng</h3>
            <p>Trải nghiệm ẩm thực cao cấp trong không gian ấm cúng và sang trọng.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Dịch vụ tổ chức tiệc</h3>
            <p>Hãy để chúng tôi mang đến những món ăn ngon cho các sự kiện và dịp đặc biệt của bạn.</p>
          </div>
          <div className={styles.serviceItem}>
            <h3>Đầu bếp riêng</h3>
            <p>Thuê đầu bếp của chúng tôi để có những trải nghiệm ẩm thực cá nhân ngay tại nhà.</p>
          </div>
        </div>
      </section>

      {/* Thực đơn nổi bật */}
      <section className={styles.menuSection}>
        <h2>Thực đơn nổi bật</h2>
        <div className={styles.menuGrid}>
          <div className={styles.menuItem}>
            <Image
              src="/images/premium_photo-1673108852141-e8c3c22a4a22.avif"
              alt="Món ăn đặc trưng"
              width={300}
              height={200}
            />
            <h3>Món ăn đặc trưng</h3>
            <p>Sự pha trộn tuyệt vời của hương vị với các nguyên liệu tươi ngon.</p>
          </div>
          <div className={styles.menuItem}>
            <Image
              src="/images/photo-1440637475816-2e8bf1d4b6f3.avif"
              alt="Pizza hảo hạng"
              width={300}
              height={200}
            />
            <h3>Pizza hảo hạng</h3>
            <p>Pizza nướng bằng củi với các nguyên liệu cao cấp.</p>
          </div>
        </div>
      </section>

      {/* Thêm Footer */}
      <Footer />
    </div>
  );
}
