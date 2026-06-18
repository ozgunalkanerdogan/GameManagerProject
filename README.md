# Game Manager

Staj projesi olarak hazırlanan **ReactJS + Vite** ile yapılmış bir oyun yönetim uygulaması.

## Proje Hakkında

Kullanıcıların kendi oyun kolesyionlarını yönetebilecekleri basit bir web uygulaması.

**Özellikleri:**
-  Oyun ekleme
-  Oyunları listeme
-  Oyun bilgilerini güncelleme
-  Oyun silme

Veriler browser'ın LocalStorage'ında saklanıyor, bu nedenle backend sunucuya ihtiyaç yok.

---

## Proje Yapisi

`\
src/
+-- Components/
¦   +-- GameForm.jsx       (Oyun ekleme/düzenleme formu)
¦   +-- GameList.jsx       (Oyun listesi tablosu)
+-- Pages/
¦   +-- Home.jsx           (Ana sayfa)
¦   +-- Games.jsx          (Oyun yönetimi sayfasi)
+-- services/
¦   +-- GameService.js     (CRUD islemleri ve localStorage)
+-- App.jsx
+-- App.css
+-- main.jsx
`\

---

## Nasıl Çalıştırılır?

### 1- Gereksinimler
- Node.js (v14+)
- npm

### 2- Kurulum

`\bash
# Projeyi aç
cd "Javascript Project"

# Bağımlılıklarını yükle
npm install
`\

### 3- Geliştirme Sunucusu

`\bash
npm run dev
`\

Uygulamaya http://localhost:5173 adresinden erişebilirsin.

### 4- Production Build

`\bash
npm run build
`\

---

##  Nasıl Kullanılır?

### Home Sayfası
- Uygulamaya hoşgeldin sayfası
- "Games" butonuna tıklayarak oyun yönetimi sayfasına geç

### Games Sayfası

**Sol Taraf - Oyun Ekleme/Düzenleme:**
- Oyun adı, türü ve fiyatını gir
- "Add Game" butonuna tıkla
- Mevcut oyunu düzenlemek için listede "Edit" butonuna tıkla
- Düzenlemeyi iptal etmek için "Cancel Editing" butonuna tıkla

**Sağ Taraf - Oyun Listesi:**
- Tüm oyunları tabel formatinda gör
- Her oyunun ID, Adı, Türü ve Fiyatı gösterilir
- **Edit**: Oyun bilgilerini düzenle
- **Delete**: Oyunu sil (onay isteği vardır)

---

## Oyun Veri Yapisi

Her oyun şu bilgileri içeriyor:

`\javascript
{
  id: 1,                    // Oyun kimligi
  name: "Minecraft",        // Oyun adi
  genre: "Sandbox",         // Türü
  price: 26.95              // Fiyati
}
`\

---

## Kullanılan Teknolojiler

| Teknoloji | Amaç |
|-----------|------|
| **React 18+** | Kullanıcı arayüzü |
| **Vite** | Geliştirme ve derleme |
| **Bootstrap 5** | Stil ve responsive tasarım |
| **LocalStorage** | Veri saklama |

---

## Proje Içinde Ögrenilen Kavramlar

1. **React Hooks** - useState, useEffect kullanımı
2. **Bilesen Tasarimi** - Component'leri nasıl bölmeli
3. **Form Islemleri** - Form validation ve veri baglama
4. **CRUD Islemleri** - Veri ekleme, okuma, güncelleme, silme
5. **LocalStorage** - Browser'da veri saklama
6. **Bootstrap** - Responsive tasarım yapma

---

## Varsayilan Oyunlar

Proje ilk açıldığında 6 örnek oyun yüklenir:

1. The Legend of Zelda: Breath of the Wild
2. Elden Ring
3. Minecraft
4. Fortnite
5. Cyberpunk 2077
6. Stardew Valley

---

## Gelistirici

**Özgün Alkan Erdogan** - 2026

---

## Bağlantılar

- **GitHub:** [GitHub Repository](https://github.com/ozgunalkanerdogan/GameManagerProject)
- **Live Demo:** [Netlify](https://netlify.com)

---

**Staj Projesi - Yapım Tarihi: Haziran 2026**
