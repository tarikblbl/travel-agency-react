// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import SearchResultsPage from './pages/SearchResultsPage';
import NotFoundPage from './pages/NotFoundPage';

// Yeni bileşenleri ve veriyi import et
import TourList from './components/TourList/TourList';
import { mockDestinations as allToursData } from './data/mockDestinations'; // Mock veriyi alalım
import { Destination as Tour } from './types/destination'; // Tipimizi alalım

const HomePageContent: React.FC = () => {
  const navigate = useNavigate(); // Yönlendirme için (opsiyonel)

  // Popüler turlar için mock veriden birkaç tane alalım
  // Cloud Function'dan da çekebiliriz ama ana sayfa için statik mock daha hızlı olabilir
  const popularTours = allToursData.slice(0, 4); // İlk 4 turu gösterelim

  const handlePopularTourClick = (tour: Tour) => {
    // Seçenek 1: Direkt partner URL'e yönlendir
    if (tour.partner_url) {
      alert(`"${tour.name}" için partner sitesine yönlendiriliyorsunuz.\nURL: ${tour.partner_url}`);
      window.open(tour.partner_url, '_blank');
    }
    // Seçenek 2: Sitenin kendi arama sonuçları sayfasına yönlendir (o tur için)
    // navigate(`/search?q=${encodeURIComponent(tour.name.split(',')[0].trim())}`);
  };

  return (
    <>
      <HeroSection />
      <section className="popular-tours-section"> {/* Genel bir class */}
        <div className="container"> {/* App.css'te bu class'ı tanımlayabiliriz */}
          <div className="section-header"> {/* App.css'te bu class'ı tanımlayabiliriz */}
            <h2 className="section-title">Popüler Rotalar</h2>
            {/* <Link to="/tours" className="explore-link">Tümünü Gör →</Link> Opsiyonel */}
          </div>
          <TourList tours={popularTours} onTourClick={handlePopularTourClick} />
        </div>
      </section>
    </>
  );
};

function App() {
  // ... (App fonksiyonunun geri kalanı aynı)
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePageContent />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;