# Game Manager ??

Staj projesi olarak hazirlanan **ReactJS + Vite** ile yapilmis bir oyun yönetim uygulamasi.

## Proje Hakkinda

Kullanicilarin kendi oyun koleksiyonlarini yönetebilecekleri basit bir web uygulamasi.

**Özellikleri:**
- ? Oyun ekleme
- ? Oyunlari listeme
- ? Oyun bilgilerini güncelleme
- ? Oyun silme

Veriler browser'in LocalStorage'inda saklaniyor, bu nedenle backend sunucuya ihtiyaç yok.

---

## ?? Proje Yapisi

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

## ?? Nasil Çalistirilir?

### 1?? Gereksinimler
- Node.js (v14+)
- npm

### 2?? Kurulum

`\bash
# Projeyi aç
cd "Javascript Project"

# Bagimliliklari yükle
npm install
`\

### 3?? Gelistirme Sunucusu

`\bash
npm run dev
`\

Uygulamaya http://localhost:5174 adresinden erisebilirsin.

### 4?? Production Build

`\bash
npm run build
`\

---

## ?? Nasil Kullanilir?

### Home Sayfasi (Ana Sayfa)
- Uygulamaya hosgeldin sayfasi
- "Games" butonuna tiklayarak oyun yönetimi sayfasina geç

### Games Sayfasi

**Sol Taraf - Oyun Ekleme/Düzenleme:**
- Oyun adi, türü ve fiyatini gir
- "Add Game" butonuna tikla
- Mevcut oyunu düzenlemek için listede "Edit" butonuna tikla
- Düzenlemeyi iptal etmek için "Cancel Editing" butonuna tikla

**Sag Taraf - Oyun Listesi:**
- Tüm oyunlari tabel formatinda gör
- Her oyunun ID, Adi, Türü ve Fiyati gösterilir
- **Edit**: Oyun bilgilerini düzenle
- **Delete**: Oyunu sil (onay istegi vardir)

---

## ?? Oyun Veri Yapisi

Her oyun su bilgileri içeriyor:

`\javascript
{
  id: 1,                    // Oyun kimligi
  name: "Minecraft",        // Oyun adi
  genre: "Sandbox",         // Türü
  price: 26.95              // Fiyati
}
`\

---

## ??? Kullanilan Teknolojiler

| Teknoloji | Amaç |
|-----------|------|
| **React 18+** | Kullanici arayüzü |
| **Vite** | Gelistirme ve derleme |
| **Bootstrap 5** | Stil ve responsive tasarim |
| **LocalStorage** | Veri saklama |

---

## ?? Proje Içinde Ögrenilen Kavramlar

1. **React Hooks** - useState, useEffect kullanimi
2. **Bilesen Tasarimi** - Component'leri nasil bölmeli
3. **Form Islemleri** - Form validation ve veri baglama
4. **CRUD Islemleri** - Veri ekleme, okuma, güncelleme, silme
5. **LocalStorage** - Browser'da veri saklama
6. **Bootstrap** - Responsive tasarim yapma

---

## ?? Varsayilan Oyunlar

Proje ilk açildiginda 6 örnek oyun yüklenir:

1. The Legend of Zelda: Breath of the Wild
2. Elden Ring
3. Minecraft
4. Fortnite
5. Cyberpunk 2077
6. Stardew Valley

---

## ?? Gelecek Iyilestirmeler

- Oyunlari arama ve filtreleme
- Oyunlari ada/türe/fiyata göre siralama
- Veriyi CSV/JSON olarak disa aktarma
- Dark mode özelligi
- Oyun yorumlari ve puanlamasi

---

## ?? Gelistirici

**Özgün Alkan Erdogan** - 2026

---

## ?? Baglantilar

- **GitHub:** [GitHub Repository](https://github.com/)
- **Live Demo:** [Netlify](https://netlify.com)

---

**Staj Projesi - Yapim Tarihi: Haziran 2026**
