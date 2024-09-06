import Header from '@/components/Header';
import styles from '../../styles/Contact.module.css';
import Footer from '@/components/Footer';


export default function Contact() {
  return (
    <div className={styles.container}>
      <Header />
      <h1 className={styles.title}>Liên Hệ Với Chúng Tôi</h1>
      <form className={styles.contactForm}>
        <label className={styles.formLabel}>
          Tên:
          <input type="text" name="name" required className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Email:
          <input type="email" name="email" required className={styles.formInput} />
        </label>
        <label className={styles.formLabel}>
          Tin nhắn:
          <textarea name="message" required className={styles.formTextarea}></textarea>
        </label>
        <button type="submit" className={styles.submitButton}>Gửi</button>
      </form>

      <Footer />
    </div>
  );
}
