// src/components/DestinationsList/DestinationsList.tsx
import React, { useRef, useState, useEffect } from 'react';
import { Destination } from '../../types/destination';
import DestinationCard from '../DestinationCard/DestinationCard';
import styles from './DestinationsList.module.css';

interface DestinationsListProps {
  destinations: Destination[];
}

const DestinationsList: React.FC<DestinationsListProps> = ({ destinations }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const checkScrollButtons = () => {
    if (!containerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setShowLeftButton(scrollLeft > 0);
    setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!containerRef.current) return;

    const scrollAmount = 300; // Her tıklamada bir kart kadar kaydır
    const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
    
    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  if (!destinations || destinations.length === 0) {
    return <p>Gösterilecek destinasyon bulunamadı.</p>;
  }

  return (
    <div className={styles.listContainerWrapper}>
      <button
        className={`${styles.scrollButton} ${styles.scrollButtonLeft}`}
        onClick={() => scroll('left')}
        style={{ display: showLeftButton ? 'flex' : 'none' }}
        aria-label="Sola kaydır"
      >
        &#8592;
      </button>
      
      <button
        className={`${styles.scrollButton} ${styles.scrollButtonRight}`}
        onClick={() => scroll('right')}
        style={{ display: showRightButton ? 'flex' : 'none' }}
        aria-label="Sağa kaydır"
      >
        &#8594;
      </button>

      <div 
        className={styles.listContainer} 
        ref={containerRef}
        onScroll={checkScrollButtons}
      >
        <div className={styles.cardsWrapper}>
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className={styles.cardContainer}
              style={{ '--animation-order': index } as React.CSSProperties}
            >
              <DestinationCard destination={destination} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationsList;