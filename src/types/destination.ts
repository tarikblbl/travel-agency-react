// src/types/destination.ts
export interface Destination {
  id: string | number;
  name: string;
  description: string;
  imageUrl: string;
  pricePerNight: number; // 'price' yerine 'pricePerNight' olarak GÜNCELLENDİ
  currency: string;      // Bu alanın var olduğundan emin ol
  rating: number;
  location: string;      // Bu alanın var olduğundan emin ol
  country: string;
  partner_url: string;   // Bu alanın var olduğundan emin ol
  tags?: string[];
}