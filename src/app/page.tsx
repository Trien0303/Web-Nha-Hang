'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

// Fetch comments data
const fetchComments = async (): Promise<Comment[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

export default function Home() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [visibleComments, setVisibleComments] = useState<Comment[]>([]);
  const [showAll, setShowAll] = useState(false);

  // Fetch comments data on mount
  useEffect(() => {
    fetchComments().then(data => {
      setComments(data);
      setVisibleComments(data.slice(0, 5));
    });
  }, []);

  const showMoreComments = () => {
    setVisibleComments(comments);
    setShowAll(true);
  };

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroImage}>
            <Image
              src="/images/logo2.jpg"
              alt="Hero Image"
              width={300}
              height={300}
            />
          </div>
          <div className={styles.heroText}>
            <h1>Chào Mừng Đến Với Gourmet Masterpieces</h1>
            <p>Khám phá những món ăn tinh tế và dịch vụ đẳng cấp.</p>
            <a href="/menu" className={styles.heroButton}>Khám Phá Thực Đơn</a>
          </div>
        </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutText}>
            <h2>Về Chúng Tôi</h2>
            <p>
              Tại Gourmet Masterpieces, chúng tôi mang đến một trải nghiệm ẩm thực
              độc đáo, kết hợp nghệ thuật nấu ăn tinh tế cùng những nguyên liệu cao
              cấp để tạo ra các món ăn đáng nhớ.
            </p>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/images/photo-1514933651103-005eec06c04b.avif"
              alt="Gourmet Masterpieces Logo"
              width={950}
              height={450}
            />
          </div>
        </section>

        {/* Featured Dishes Section */}
        <section className={styles.featuredDishesSection}>
          <h2>Món Ăn Nổi Bật</h2>
          <div className={styles.featuredDishesGrid}>
            <div className={styles.dishItem}>
              <Image
                src="/images/dish1.avif"
                alt="Món ăn 1"
                width={300}
                height={200}
              />
              <h3>Món Ăn 1</h3>
              <p>Mô tả về món ăn 1.</p>
            </div>
            <div className={styles.dishItem}>
              <Image
                src="/images/dish2.avif"
                alt="Món ăn 2"
                width={300}
                height={200}
              />
              <h3>Món Ăn 2</h3>
              <p>Mô tả về món ăn 2.</p>
            </div>
            <div className={styles.dishItem}>
              <Image
                src="/images/dish3.avif"
                alt="Món ăn 3"
                width={300}
                height={200}
              />
              <h3>Món Ăn 3</h3>
              <p>Mô tả về món ăn 3.</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <h2>Dịch Vụ Của Chúng Tôi</h2>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <h3>Nhà Hàng Sang Trọng</h3>
              <p>Trải nghiệm ẩm thực cao cấp trong không gian ấm cúng và sang trọng.</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Dịch Vụ Tổ Chức Tiệc</h3>
              <p>Hãy để chúng tôi mang đến những món ăn ngon cho các sự kiện và dịp đặc biệt của bạn.</p>
            </div>
            <div className={styles.serviceItem}>
              <h3>Đầu Bếp Riêng</h3>
              <p>Thuê đầu bếp của chúng tôi để có những trải nghiệm ẩm thực cá nhân ngay tại nhà.</p>
            </div>
          </div>
        </section>

        {/* Comments Section */}
        <section className={styles.commentsSection}>
          <h2>Những Bình Luận Gần Đây</h2>
          <div className={styles.commentsGrid}>
            {visibleComments.map((comment) => (
              <div key={comment.id} className={styles.commentItem}>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>
                <small>
                  <i>{comment.email}</i>
                </small>
              </div>
            ))}
          </div>
          {!showAll && comments.length > 5 && (
            <button className={styles.showMoreButton} onClick={showMoreComments}>
              Xem Thêm
            </button>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
