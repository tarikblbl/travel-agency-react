// src/components/TourList/TourList.tsx
import React from 'react';
import { Destination as Tour } from '../../types/destination';
import TourCard from '../TourCard/TourCard';
import styles from './TourList.module.css';

interface TourListProps {
  tours: Tour[];
  onTourClick?: (tour: Tour) => void; // Karttaki butona tıklandığında çalışacak fonksiyon
}

const TourList: React.FC<TourListProps> = ({ tours, onTourClick }) => {
  if (!tours || tours.length === 0) {
    return <p className={styles.noToursMessage}>Gösterilecek popüler tur bulunamadı.</p>;
  }

  return (
    <div className={styles.tourListGrid}>
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} onViewDetailsClick={onTourClick} />
      ))}
    </div>
  );
};

export default TourList;