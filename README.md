# LedgerAI — AI Muhasebe Websitesi

Next.js 14 + TypeScript + Tailwind CSS ile geliştirilmiş, yapay zeka destekli muhasebe platformu landing page'i.

## 🚀 Kurulum

```bash
# 1. Bağımlılıkları yükleyin
npm install

# 2. Geliştirme sunucusunu başlatın
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini açın.

## 📦 Build

```bash
npm run build
npm start
```

## 🗂 Proje Yapısı

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, Google Fonts
│   ├── page.tsx            # Ana sayfa — tüm bölümleri birleştirir
│   └── globals.css         # Global stiller, CSS değişkenleri
└── components/
    ├── Navbar.tsx           # Sticky navbar, mobil menü
    ├── Hero.tsx             # Hero bölümü, animasyonlu terminal
    ├── Features.tsx         # 6 özellik kartı
    ├── DashboardPreview.tsx # Sahte dashboard görseli
    ├── HowItWorks.tsx       # 4 adımlı süreç
    ├── Pricing.tsx          # 3 fiyat planı (aylık/yıllık toggle)
    ├── Testimonials.tsx     # 6 müşteri yorumu
    ├── FAQ.tsx              # Accordian SSS
    ├── CTABanner.tsx        # Son CTA bölümü
    └── Footer.tsx           # Footer, linkler, iletişim
```

## 🎨 Tasarım Sistemi

- **Fontlar:** Playfair Display (başlıklar) + DM Sans (metin) + JetBrains Mono (kod)
- **Renkler:** Obsidian arkaplan (#0A0A0F), Amber vurgu (#F59E0B), Teal ikincil (#14B8A6)
- **Tema:** Karanlık, lüks fintech estetiği
- **Animasyonlar:** CSS keyframe'ler, terminal yazma efekti, pulse ring

## ✏️ Özelleştirme

- `src/components/Navbar.tsx` — logo ve menü linkleri
- `src/components/Pricing.tsx` — fiyatları ve özellikleri güncelleyin
- `src/components/Testimonials.tsx` — gerçek müşteri yorumları ekleyin
- `src/app/globals.css` — renkler ve CSS değişkenleri

## 📋 Teknolojiler

- **Framework:** Next.js 14 (App Router)
- **Dil:** TypeScript
- **Stil:** Tailwind CSS
- **İkonlar:** Lucide React
- **Fontlar:** Google Fonts
# startup
