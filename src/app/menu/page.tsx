'use client'; 

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/Menu.module.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { fetchMenuItems } from '../../utils/apiHelpers';

interface MenuItem {
  id: number;
  name: string;
  body: string; // Thay đổi theo cấu trúc dữ liệu của bạn
}

export default function Menu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadMenuItems = async () => {
      setLoading(true);
      try {
        const items = await fetchMenuItems();
        setMenuItems(items);
      } catch (error) {
        // Handle error if needed
      } finally {
        setLoading(false);
      }
    };

    loadMenuItems();
  }, []);

  return (
    <div className={styles.container}>
      <Header />

      {/* Thực đơn món ăn */}
      <section className={styles.menuSection}>
        <h2>Thực đơn món ăn</h2>
        {loading && <p>Loading...</p>}
        <div className={styles.menuGrid}>
          {menuItems.map(item => (
            <div key={item.id} className={styles.menuItem}>
              <Image
                src="/images/dish1.avif"
                alt={item.name}
                width={300}
                height={200}
              />
              <h3>{item.name}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
