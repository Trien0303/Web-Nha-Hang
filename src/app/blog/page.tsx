import Footer from '@/components/Footer';
import styles from '../../styles/Food.module.css';
import Header from '@/components/Header';

export default function Blog() {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Các Tác Phẩm Ẩm Thực Đỉnh Cao</h1>
      
      <article className={styles.blogPost}>
        <h2 className={styles.blogTitle}>Khám Phá Các Món Ăn Ngon Nhất Tại Gourmet Masterpieces</h2>
        <p className={styles.blogDate}>Ngày 5 tháng 9, 2024</p>
        <img src="/images/photo-1474898856510-884a2c0be546.avif" alt="Món Ăn Ngon" className={styles.blogImage} />
        <p className={styles.blogContent}>
          Tại Gourmet Masterpieces, chúng tôi tự hào mang đến một trải nghiệm ẩm thực tuyệt vời với thực đơn đa dạng, phục vụ mọi khẩu vị. Các món ăn đặc trưng của chúng tôi bao gồm [Tên Món Ăn], [Tên Món Ăn], và [Tên Món Ăn], mỗi món được chế biến từ nguyên liệu tươi ngon nhất và một chút sáng tạo. Hãy đến với chúng tôi để khám phá những kiệt tác ẩm thực này và thưởng thức một bữa ăn đáng nhớ trong một không gian ấm cúng và thân thiện.
        </p>
      </article>
      
      <article className={styles.blogPost}>
        <h2 className={styles.blogTitle}>Gặp Gỡ Đầu Bếp Của Chúng Tôi</h2>
        <p className={styles.blogDate}>Ngày 20 tháng 8, 2024</p>
        <img src="/images/photo-1541614101331-1a5a3a194e92.avif" alt="Đầu Bếp" className={styles.blogImage} />
        <p className={styles.blogContent}>
          Gặp gỡ T-Chef, đầu bếp tài năng đứng sau những món ăn ngon tại Gourmet Masterpieces. Với nhiều năm kinh nghiệm và niềm đam mê nghệ thuật ẩm thực, T-Chef mang đến những hương vị độc đáo và kỹ thuật sáng tạo cho thực đơn của chúng tôi. Khám phá câu chuyện về hành trình của đầu bếp và những nguồn cảm hứng thúc đẩy việc tạo ra các món ăn ngon miệng của chúng tôi.
        </p>
      </article>
      
      <article className={styles.blogPost}>
        <h2 className={styles.blogTitle}>Khám Phá Nhà Hàng Của Chúng Tôi: Những Gì Để Mong Đợi</h2>
        <p className={styles.blogDate}>Ngày 15 tháng 7, 2024</p>
        <img src="/images/photo-1474898856510-884a2c0be546.avif" alt="Nội Thất Nhà Hàng" className={styles.blogImage} />
        <p className={styles.blogContent}>
          Đang lên kế hoạch thăm Gourmet Masterpieces? Dưới đây là những gì bạn có thể mong đợi từ trải nghiệm ẩm thực của mình. Từ không gian nội thất thanh lịch và ấm cúng đến dịch vụ tận tình và các món ăn ngon miệng, chúng tôi hướng đến việc cung cấp một trải nghiệm không thể quên cho mỗi khách hàng. Khám phá không khí của nhà hàng chúng tôi và tìm hiểu tại sao [Tên Nhà Hàng] là nơi lý tưởng cho bữa ăn tiếp theo của bạn.
        </p>
      </article>
      <Footer />
    </div>
  );
}
