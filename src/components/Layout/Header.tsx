// src/components/Layout/Header.tsx
import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom'; // react-router-dom'dan Link bileşenini import et

const Header: React.FC = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={styles.navContainer}>
        <div className={styles.logoArea}>
          <Link to="/" className={styles.logoLink}> {/* LOGO İÇİN Link KULLANIMI */}
            {/* Eğer manuel SVG logo kullanıyorsan: <PlaneLogoIcon className={styles.logoIcon} /> */}
            <span className={styles.logoText}>EasyTravel</span>
          </Link>
        </div>
        <nav className={styles.navLinks}>
          {/* Diğer linkler şimdilik standart <a> etiketi olarak kalabilir veya onlar için de <Link> kullanabilirsin */}
          <a href="#" className={`${styles.navLinkItem} ${styles.langLink}`}>
            {/* Eğer dünya ikonu SVG ise: <GlobeIcon /> */}
            <span>English</span>
          </a>
          <a href="#" className={styles.navLinkItem}>Help</a>
          <a href="#" className={`${styles.navLinkItem} ${styles.listPropertyButton}`}>
            List your property
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;