// src/data/mockDestinations.ts
import { Destination } from '../types/destination';

export const mockDestinations: Destination[] = [
  {
    id: '1',
    name: 'Paris, Fransa',
    description: 'Aşkın ve ışıkların şehri. Eyfel Kulesi, Louvre Müzesi ve daha fazlası.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80',
    country: 'Fransa',
    pricePerNight: 150,
    currency: 'EUR', // EKLENDİ
    location: 'Paris', // EKLENDİ
    rating: 4.8,
    partner_url: 'https://www.viator.com/search/Paris?pid=tarik123', // EKLENDİ
    tags: ['romantik', 'şehir', 'kültür'],
  },
  {
    id: '2',
    name: 'Roma, İtalya',
    description: 'Tarihi yapıları, lezzetli yemekleri ve canlı atmosferi ile ünlü.',
    imageUrl: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80',
    country: 'İtalya',
    pricePerNight: 120,
    currency: 'EUR', // EKLENDİ
    location: 'Roma',  // EKLENDİ
    rating: 4.7,
    partner_url: 'https://www.viator.com/search/Rome?pid=tarik123', // EKLENDİ
    tags: ['tarihi', 'yemek', 'şehir'],
  },
  {
    id: '3',
    name: 'Bali, Endonezya',
    description: 'Egzotik plajları, pirinç tarlaları ve spiritüel atmosferi ile cennetten bir köşe.',
    imageUrl: 'https://images.unsplash.com/photo-1573790387438-4da905039392?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    country: 'Endonezya',
    pricePerNight: 80,
    currency: 'USD', // EKLENDİ
    location: 'Ubud, Bali', // EKLENDİ
    rating: 4.9,
    partner_url: 'https://www.getyourguide.com/bali-l69/?partner_id=tarik123', // EKLENDİ
    tags: ['plaj', 'doğa', 'dinlenme'],
  },
  {
    id: '4',
    name: 'Santorini, Yunanistan',
    description: 'Beyaz badanalı evleri ve muhteşem gün batımı manzarası ile Ege\'nin incisi.',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-52b9be46ae6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', // Değiştirildi
    country: 'Yunanistan',
    pricePerNight: 200,
    currency: 'EUR', // EKLENDİ
    location: 'Santorini', // EKLENDİ
    rating: 4.9,
    partner_url: 'https://www.viator.com/search/Santorini?pid=tarik123', // EKLENDİ
    tags: ['ada', 'romantik', 'manzara'],
  },
  {
    id: '5',
    name: 'Dubai, BAE',
    description: 'Modern mimari, lüks alışveriş merkezleri ve çöl safarileri ile benzersiz bir deneyim.',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Değiştirildi
    country: 'Birleşik Arap Emirlikleri',
    pricePerNight: 300,
    currency: 'AED', // EKLENDİ
    location: 'Dubai', // EKLENDİ
    rating: 4.6,
    partner_url: 'https://www.viator.com/search/Dubai?pid=tarik123', // EKLENDİ
    tags: ['lüks', 'modern', 'çöl'],
  },
  {
    id: '6',
    name: 'Kyoto, Japonya',
    description: 'Geleneksel tapınakları, zen bahçeleri ve kiraz çiçekleri ile Japon kültürünün kalbi.',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80', // Değiştirildi
    country: 'Japonya',
    pricePerNight: 150,
    currency: 'JPY', // EKLENDİ
    location: 'Kyoto', // EKLENDİ
    rating: 4.8,
    partner_url: 'https://www.viator.com/search/Kyoto?pid=tarik123', // EKLENDİ
    tags: ['kültür', 'tapınak', 'bahçe'],
  },
  {
    id: '7',
    name: 'Cape Town, Güney Afrika',
    description: 'Masa Dağı manzarası, şarap bağları ve safari turları ile Afrika\'nın en güzel şehri.',
    imageUrl: 'https://images.unsplash.com/photo-1576009486441-01970a10151d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', // Değiştirildi
    country: 'Güney Afrika',
    pricePerNight: 120,
    currency: 'ZAR', // EKLENDİ
    location: 'Cape Town', // EKLENDİ
    rating: 4.7,
    partner_url: 'https://www.viator.com/search/Cape%20Town?pid=tarik123', // EKLENDİ
    tags: ['doğa', 'şarap', 'safari'],
  },
  {
    id: '8',
    name: 'Rio de Janeiro, Brezilya',
    description: 'Copacabana plajı, Kurtarıcı İsa heykeli ve karnaval ruhu ile Latin Amerika\'nın kalbi.',
    imageUrl: 'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80', // Değiştirildi
    country: 'Brezilya',
    pricePerNight: 100,
    currency: 'BRL', // EKLENDİ
    location: 'Rio de Janeiro', // EKLENDİ
    rating: 4.5,
    partner_url: 'https://www.viator.com/search/Rio%20de%20Janeiro?pid=tarik123', // EKLENDİ
    tags: ['plaj', 'karnaval', 'eğlence'],
  }
];