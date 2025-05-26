// src/components/HeroSection/HeroSection.tsx
import React from 'react';
import styles from './HeroSection.module.css';
// İkonları kaldırmıştık, eğer manuel SVG eklemeye karar verirsek buraya importları gelir.
// Şimdilik ikonsuz devam edelim.
import palmImageFile from '../../assets/images/palms.jpg'; // Arka plan görseli (sağ taraf için)
// VEYA tüm hero için bir arkaplan resmi:
// import heroBackgroundImage from '../../assets/images/hero-main-bg.jpg';

import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const destination = formData.get('destination') as string;

    if (destination && destination.trim() !== '') {
      navigate(`/search?q=${encodeURIComponent(destination.trim())}`);
    } else {
      navigate('/search');
    }
  };

  return (
    // Ana section'a yeni bir class verebiliriz veya mevcutu kullanabiliriz
    // Eğer tüm hero için tek bir arkaplan resmi kullanacaksak:
    // <section className={styles.heroSection} style={{ backgroundImage: `url(${heroBackgroundImage})` }}>
    <section className={styles.heroSection}>
      <div className={styles.heroOverlay}></div> {/* Işık/kontrast ayarı için overlay */}
      <div className={`${styles.container} ${styles.heroContent}`}>
        <div className={styles.heroText}>
          <h1>
            Hayalindeki
            <br />
            <span className={styles.highlightedText}>Tatili</span> Keşfet!
          </h1>
          <p>En iyi fiyatlarla unutulmaz anılar biriktirin.</p>
        </div>

        <div className={styles.searchFormCard}>
          <div className={styles.formTitleContainer}>
            {/* İkon eklenebilir: <DünyaSVG className={styles.formTitleIcon} /> */}
            <h2 className={styles.formTitle}>Nereye Gitmek İstersin?</h2>
          </div>
          <form className={styles.searchForm} onSubmit={handleSearch}>
            <div className={styles.formRowSimplified}>
              <div className={`${styles.formGroup} ${styles.destinationInputGroup}`}>
                <div className={styles.inputWithIcon}>
                  {/* İkon eklenebilir: <HaritaPiniSVG /> */}
                  <input
                    type="text"
                    id="destination-input"
                    name="destination"
                    placeholder="Şehir, bölge veya otel adı girin..."
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <button type="submit" className={styles.searchButton}>
                  {/* İkon eklenebilir: <AramaLupuSVG /> */}
                  Ara
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* Sağ taraftaki palmiye ağacı görseli için div (opsiyonel, eğer tüm hero bg yoksa) */}
      {!true && <div className={styles.heroImageRight} style={{ backgroundImage: `url(${palmImageFile})` }}></div>}
      {/* Yukarıdaki satırı !true yaparak geçici olarak gizledim, tüm hero bg kullanacaksak bu div'e gerek yok */}
    </section>
  );
};

export default HeroSection;