import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerSection}>
          <h3>Hakkımızda</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#">Şirketimiz</a></li>
            <li><a href="#">Kariyer</a></li>
            <li><a href="#">Basın</a></li>
            <li><a href="#">İletişim</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Destinasyonlar</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#">Avrupa</a></li>
            <li><a href="#">Asya</a></li>
            <li><a href="#">Amerika</a></li>
            <li><a href="#">Afrika</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Yardım</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#">SSS</a></li>
            <li><a href="#">Rezervasyon</a></li>
            <li><a href="#">İptal & İade</a></li>
            <li><a href="#">Güvenlik</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h3>Bizi Takip Edin</h3>
          <ul className={styles.footerLinks}>
            <li><a href="#">Bültenimize Katılın</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialIcon}>FB</a>
            <a href="#" className={styles.socialIcon}>TW</a>
            <a href="#" className={styles.socialIcon}>IG</a>
            <a href="#" className={styles.socialIcon}>LI</a>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        © 2024 EasyTravel. Tüm hakları saklıdır.
      </div>
    </footer>
  );
};

export default Footer;