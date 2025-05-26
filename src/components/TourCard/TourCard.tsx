// src/components/TourCard/TourCard.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Detay sayfasına veya arama sonuçlarına link vermek için
import { Destination as Tour } from '../../types/destination'; // Tipimizi import ediyoruz
import styles from './TourCard.module.css';

interface TourCardProps {
  tour: Tour;
  onViewDetailsClick?: (tour: Tour) => void; // Opsiyonel, partner URL'e yönlendirme için
}

const TourCard: React.FC<TourCardProps> = ({ tour, onViewDetailsClick }) => {
  const handleDetailsClick = () => {
    if (onViewDetailsClick) {
      onViewDetailsClick(tour);
    } else if (tour.partner_url) {
      // Eğer onViewDetailsClick prop'u yoksa ama partner_url varsa direkt yönlendir
      window.open(tour.partner_url, '_blank');
    }
    // İleride belki bir tur detay sayfasına yönlendirme de eklenebilir:
    // navigate(`/tour/${tour.id}`);
  };

  return (
    <div className={styles.tourCard}>
      <div className={styles.imageContainer}>
        <img src={tour.imageUrl} alt={tour.name} className={styles.cardImage} />
        {tour.pricePerNight && tour.currency && (
          <div className={styles.priceTag}>
            {tour.currency} {tour.pricePerNight}
            {/* <span className={styles.pricePerPerson}>/kişi başı</span> */}
          </div>
        )}
      </div>
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>
          {/* İleride tur detay sayfasına link verebiliriz */}
          {/* <Link to={`/tour/${tour.id}`}>{tour.name}</Link> */}
          {tour.name}
        </h3>
        <p className={styles.cardLocation}>
          {/* İkon eklenebilir: <FaMapMarkerAlt /> */}
          {tour.location}, {tour.country}
        </p>
        {tour.rating && (
          <div className={styles.cardRating}>
            {/* İkon eklenebilir: <FaStar /> */}
            <span>⭐ {tour.rating.toFixed(1)}</span>
            {/* <span className={styles.reviewCount}>(230 yorum)</span> Opsiyonel */}
          </div>
        )}
        <p className={styles.cardDescription}>
          {tour.description.substring(0, 80)}...
        </p>
        <button onClick={handleDetailsClick} className={styles.detailsButton}>
          Detayları Gör
        </button>
      </div>
    </div>
  );
};

export default TourCard;