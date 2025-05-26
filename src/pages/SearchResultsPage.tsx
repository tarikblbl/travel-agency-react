// src/pages/SearchResultsPage.tsx
import React, { useEffect, useState } from 'react';
import { useSearchParams, Link as RouterLink } from 'react-router-dom';
import { Destination as Tour } from '../types/destination'; // Destination tipini Tour olarak adlandırdık
import styles from './SearchResultsPage.module.css';

// Firebase Cloud Function URL'imiz
const API_BASE_URL = "https://us-central1-deneme-e4d1d.cloudfunctions.net";

const SearchResultsPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      setError(null);
      try {
        const endpoint = query
          ? `${API_BASE_URL}/searchTours?q=${encodeURIComponent(query)}`
          : `${API_BASE_URL}/searchTours`;

        const response = await fetch(endpoint);
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({ message: "API'den geçersiz yanıt." }));
          throw new Error(`API Hatası: ${response.status} - ${errorData.message || response.statusText}`);
        }
        const data: Tour[] = await response.json();
        setTours(data);
        document.title = query ? `Arama Sonuçları: ${query}` : "Tüm Seyahatler";
      } catch (err) {
        console.error("Tur verileri çekilirken hata oluştu:", err);
        setError((err as Error).message || "Bir hata oluştu. Lütfen tekrar deneyin.");
        setTours([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [query]);

  const partnerId = "tarik123";

  const handleDestinationClick = (tour: Tour) => {
    if (tour.partner_url) {
      alert(`"${tour.name}" için partner sitesine yönlendiriliyorsunuz.\nURL: ${tour.partner_url}`);
      window.open(tour.partner_url, '_blank');
    } else {
      const fallbackSearchTerm = encodeURIComponent(tour.name.split(',')[0].trim());
      const fallbackPartnerUrl = `https://www.viator.com/search/${fallbackSearchTerm}?pid=${partnerId}`;
      alert(`Partner URL bulunamadı, genel arama yapılıyor.\nURL: ${fallbackPartnerUrl}`);
      window.open(fallbackPartnerUrl, '_blank');
    }
  };

  if (loading) {
    return <div className={styles.loadingState}>Yükleniyor...</div>;
  }

  if (error) {
    return <div className={styles.errorState}>Hata: {error}</div>;
  }

  return (
    <div className={styles.resultsPageContainer}>
      <RouterLink to="/" className={styles.backLink}>← Ana Sayfaya Dön</RouterLink>
      <h1>
        {tours.length > 0 || query
          ? `Arama Sonuçları ${query ? `için "${query}"` : "(Tüm Seyahatler)"}`
          : ""}
      </h1>
      {tours.length > 0 ? (
        <div className={styles.resultsGrid}>
          {tours.map((tour) => (
            <div key={tour.id} className={styles.resultCard}>
              <img
                src={tour.imageUrl}
                alt={tour.name}
                className={styles.cardImage}
              />
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{tour.name}</h3>
                <p className={styles.cardLocationCountry}>
                  {tour.location} - {tour.country}
                </p>
                <div className={styles.cardRatingPrice}>
                  {tour.rating && (
                    <span className={styles.cardRating}>
                      ⭐ {tour.rating.toFixed(1)} {/* Basit yıldız emojisi */}
                    </span>
                  )}
                  {tour.pricePerNight && tour.currency && ( // pricePerNight ve currency varsa göster
                    <span className={styles.cardPrice}>
                      {tour.currency} {tour.pricePerNight}
                    </span>
                  )}
                </div>
                <p className={styles.cardDescription}>
                  {tour.description.substring(0, 100)}...
                </p>
                <button
                  onClick={() => handleDestinationClick(tour)}
                  className={styles.detailsButton}
                >
                  Turu İncele
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className={styles.noResults}>
          {query
            ? `"${query}" ile eşleşen bir seyahat bulunamadı.`
            : "Gösterilecek seyahat bulunamadı."}
        </p>
      )}
    </div>
  );
};

export default SearchResultsPage;