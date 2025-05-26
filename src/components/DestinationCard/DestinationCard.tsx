// src/components/DestinationCard/DestinationCard.tsx
import React from 'react';
import { Destination } from '../../types/destination'; // Tipimizi import ediyoruz
import styles from './DestinationCard.module.css'; // CSS modülümüzü import ediyoruz
// Eğer react-router-dom kullanıyorsan ve kartlar tıklanabilir olacaksa:
// import { Link } from 'react-router-dom';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  const imageStyle = destination.imageUrl.startsWith('linear-gradient') 
    ? { background: destination.imageUrl }
    : {};

  const handleBuyClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Kartın tıklama olayını engelle
    // Burada satın alma işlemi için gerekli fonksiyonu çağırabilirsiniz
    alert(`${destination.name} için rezervasyon sayfasına yönlendiriliyorsunuz...`);
  };

  // Eğer kartın tamamı bir link olacaksa, en dıştaki div yerine Link kullanırsın
  // Örneğin: <Link to={`/destination/${destination.id}`} className={styles.cardLink}>
  // ve kapanışını da </Link> yaparsın. Şimdilik sadece div bırakıyorum.
  return (
    <div className={styles.card}>
      {destination.imageUrl.startsWith('linear-gradient') ? (
        <div className={styles.cardImage} style={imageStyle} />
      ) : (
        <img src={destination.imageUrl} alt={destination.name} className={styles.cardImage} />
      )}
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{destination.name}</h3>
        <p className={styles.cardCountry}>{destination.country}</p>
        <p className={styles.cardDescription}>{destination.description.substring(0, 100)}...</p>
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>Gecelik: ${destination.pricePerNight}</span>
          <span className={styles.cardRating}>Puan: {destination.rating}/5</span>
        </div>
        {destination.tags && destination.tags.length > 0 && (
          <div className={styles.cardTags}>
            {destination.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}
        <button 
          className={styles.buyButton}
          onClick={handleBuyClick}
        >
          Rezervasyon Yap
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;