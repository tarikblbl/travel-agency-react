// src/pages/NotFoundPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

const NotFoundPage: React.FC = () => {
  // ... (içerik aynı)
  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorMessage}>Oops! Sayfa Bulunamadı.</h2>
      <p className={styles.errorDescription}>
        Aradığınız sayfa mevcut değil, taşınmış veya hiç var olmamış olabilir.
      </p>
      <Link to="/" className={styles.homeButton}>
        Ana Sayfaya Dön
      </Link>
    </div>
  );
};

export default NotFoundPage; // <-- BU SATIRIN OLDUĞUNDAN EMİN OL!