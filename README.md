# Seyahat Acentesi Frontend Projesi

Bu proje, React ve TypeScript kullanılarak geliştirilmiş bir seyahat acentesi web uygulamasının frontend kısmıdır. Kullanıcıların seyahat turlarını aramasına ve detaylarını görüntülemesine olanak tanır.

## Özellikler (Şu Anki ve Planlanan)

*   Modern ve kullanıcı dostu arayüz.
*   Hero section'da arama özelliği.
*   Arama sonuçlarının listelendiği sayfa.
*   Mock API üzerinden tur verilerinin çekilmesi (Firebase Cloud Functions ile simüle edilmiştir).
*   Partner sitelerine yönlendirme ile komisyon modeli simülasyonu.
*   (Planlanan) Popüler destinasyonlar bölümü.
*   (Planlanan) Kullanıcı yorumları.
*   (Planlanan) Gerçek 3. parti seyahat API'leri ile entegrasyon.

## Kullanılan Teknolojiler

*   **Frontend:** React, TypeScript
*   **Styling:** CSS Modules
*   **Routing:** React Router DOM
*   **Mock API (Simülasyon):** Firebase Cloud Functions
*   **Paket Yöneticisi:** npm
*   **Versiyon Kontrol:** Git & GitHub

## Kurulum ve Çalıştırma

1.  Projeyi klonlayın:
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
    cd YOUR_REPOSITORY_NAME
    ```
2.  Gerekli bağımlılıkları yükleyin:
    ```bash
    npm install
    ```
3.  (Eğer Firebase Cloud Functions kullanılıyorsa) `functions` klasörüne gidip oradaki bağımlılıkları da yükleyin:
    ```bash
    cd functions
    npm install
    cd ..
    ```
4.  Uygulamayı geliştirme modunda başlatın:
    ```bash
    npm start
    ```
    Tarayıcıda `http://localhost:3000` adresinde açılacaktır.

5.  (Eğer Firebase Cloud Functions kullanılıyorsa ve lokalde test etmek isterseniz) Firebase emülatörlerini başlatın:
    *   Proje kök dizininde: `firebase emulators:start`
    *   Cloud Function endpoint'i genellikle `http://localhost:5001/YOUR_PROJECT_ID/YOUR_REGION/searchTours` gibi olur. React uygulamasındaki API URL'ini buna göre ayarlamanız gerekebilir.


## TODO (Yapılacaklar)

- [ ] Ana sayfaya "Popüler Destinasyonlar" bölümü eklemek.
- [ ] Manuel SVG ikonlarını entegre etmek.
- [ ] Footer tasarımını detaylandırmak.
- [ ] Gerçek seyahat API'leri için API key başvurularını yapmak.

---

_Bu proje, bir iş başvurusu portfolyosu ve öğrenme amacıyla geliştirilmektedir._