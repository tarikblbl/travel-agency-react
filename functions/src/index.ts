import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import cors from "cors";

if (!admin.apps.length) {
  admin.initializeApp();
}

const corsHandler = cors({origin: true});

interface MockTour {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  currency: string;
  rating: number;
  location: string;
  country: string;
  partner_url: string;
  tags?: string[];
}

const allMockTours: MockTour[] = [
  {
    id: "paris001",
    name: "Paris: Eyfel Kulesi Zirveye Çıkış Bileti",
    description:
      "Eyfel Kulesi'nin zirvesinden Paris'in muhteşem manzarasının " +
      "keyfini çıkarın. Hızlı geçiş imkanıyla sıra beklemeyin.",
    imageUrl:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib" +
      "=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" +
      "&auto=format&fit=crop&w=1173&q=80",
    price: 55,
    currency: "EUR",
    rating: 4.8,
    location: "Paris",
    country: "Fransa",
    partner_url: "https://www.viator.com/search/Eiffel%20Tower?pid=tarik123",
    tags: ["popüler", "manzara", "tarihi", "paris"],
  },
  {
    id: "paris002",
    name: "Paris: Louvre Müzesi Öncelikli Giriş Bileti ve Rehberli Tur",
    description:
      "Dünyanın en büyük sanat müzesi Louvre'u keşfedin. Mona Lisa'yı " +
      "ve diğer başyapıtları görün.",
    imageUrl:
      "https://images.unsplash.com/photo-1591651372031-56c7cb7bd1ae?ixlib" +
      "=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" +
      "&auto=format&fit=crop&w=1074&q=80",
    price: 75,
    currency: "EUR",
    rating: 4.7,
    location: "Paris",
    country: "Fransa",
    partner_url:
      "https://www.getyourguide.com/paris-l16/louvre-museum-priority-access-" +
      "ticket-with-audio-guide-t101369/?partner_id=tarik123",
    tags: ["sanat", "müze", "kültür", "paris", "rehberli tur"],
  },
  {
    id: "rome001",
    name: "Roma: Kolezyum, Roma Forumu ve Palatin Tepesi Turu",
    description:
      "Antik Roma'nın kalbine yolculuk yapın. İkonik Kolezyum'u ve " +
      "antik kalıntıları keşfedin.",
    imageUrl:
      "https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib" +
      "=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" +
      "&auto=format&fit=crop&w=1073&q=80",
    price: 60,
    currency: "EUR",
    rating: 4.9,
    location: "Roma",
    country: "İtalya",
    partner_url: "https://www.viator.com/search/Colosseum%20Rome?pid=tarik123",
    tags: ["tarihi", "antik", "roma", "kolezyum"],
  },
  {
    id: "bali001",
    name: "Bali: Ubud Pirinç Tarlaları ve Kutsal Maymun Ormanı Turu",
    description:
      "Bali'nin doğal güzelliklerini ve kültürel zenginliğini keşfedin. " +
      "Ünlü pirinç tarlalarını ve sevimli maymunları görün.",
    imageUrl:
      "https://images.unsplash.com/photo-1518548454405-00CHS4S9S9S?ixlib" +
      "=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" +
      "&auto=format&fit=crop&w=1000&q=80",
    price: 45,
    currency: "USD",
    rating: 4.6,
    location: "Ubud, Bali",
    country: "Endonezya",
    partner_url:
      "https://www.getyourguide.com/bali-l69/ubud-highlights-private-" +
      "guided-tour-t393971/?partner_id=tarik123",
    tags: ["doğa", "kültür", "bali", "pirinç tarlası", "maymun"],
  },
];

export const searchTours = functions.https.onRequest((request, response) => {
  corsHandler(request, response, () => {
    try {
      const query = (request.query.q as string)?.toLowerCase() || "";

      functions.logger.info(
        `Search query received: ${query}`,
        {structuredData: true}
      );

      let filteredTours = allMockTours;

      if (query) {
        filteredTours = allMockTours.filter(
          (tour) =>
            tour.name.toLowerCase().includes(query) ||
            tour.description.toLowerCase().includes(query) ||
            tour.location.toLowerCase().includes(query) ||
            tour.country.toLowerCase().includes(query) ||
            (tour.tags &&
              tour.tags.some((tag) => tag.toLowerCase().includes(query)))
        );
      }

      functions.logger.info(
        `Found ${filteredTours.length} tours for query "${query}"`
      );
      response.status(200).json(filteredTours);
    } catch (error) {
      functions.logger.error("Error in searchTours function:", error);
      response.status(500).json({
        error: (error as Error).message || "An unknown error occurred",
      });
    }
  });
});

// Dosya sonuna boş bir yeni satır eklendiğinden
