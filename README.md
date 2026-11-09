# Enjoy Holidays Tour and Travel, Katra (J&K)
### Premium, Luxury Full-Stack Travel Agency Web Application

A world-class, responsive, and high-conversion travel agency web platform designed for **ENJOY HOLIDAYS TOUR AND TRAVEL**, located at the holy foothills of **Katra, Jammu & Kashmir, India** (base camp for Shri Mata Vaishno Devi Ji pilgrimages).

---

## 🌟 Key Highlights & Design Direction

- **Brand Identity & Luxury Aesthetic**: Clean pearl white & soft slate backgrounds paired with deep navy (`#060a12`, `#0f172a`), ocean blue (`#0284c7`), and warm golden accents (`#f59e0b`).
- **Real Business Branding**: Official logo integrated in the sticky navbar, footer, favicon, and loading screen.
- **Cinematic Full-Screen Hero Slideshow**: Features all 15 authentic photographs from the Katra office with smooth Ken Burns motion (alternating slow zoom-in/zoom-out), progress timer, play/pause controls, keyboard navigation, and expandable thumbnail dock.
- **Typography**: Paired with *Playfair Display* for luxurious editorial headings and *Plus Jakarta Sans* for crisp modern readability.
- **Holiday Makers Structure**: Multi-level navigation dropdowns for Places, Explore Tours (by Travel Style), Special Tours, Taxi Services, and Hotels.
- **Zero-Friction Launch**: Zero complicated build chains. Runs immediately via browser or local Python server.

---

## 📇 Verified Business Details

- **Company Name:** ENJOY HOLIDAYS TOUR AND TRAVEL
- **Contact Person:** Sunil Sharma
- **Primary Helpline:** +91 70062 35878
- **Direct Mobile Desk:** +91 94191 04938
- **WhatsApp:** +91 70062 35878 (`917006235878`)
- **Official Email:** `enjoyholidays44@gmail.com`
- **Head Office Address:** Ban Ganga Road, near Shalimar Garden Chintamani, opposite Hotel Sanjeev Palace, Katra, Jammu and Kashmir 182301
- **Customer Rating:** 4.8 / 5.0 (based on verified Google reviews)
- **Facebook Page:** [Enjoy Holidays 44](https://www.facebook.com/enjoyholidays44/)

---

## 🚀 Quick Start (Running Locally)

### Option 1: Double-Click Runner (Windows)
Double-click `run_website.bat` inside the `enjoy_holidays_travel` folder, or `run_travel_website.bat` in the workspace root.
It will automatically open your default browser.

### Option 2: Direct File Opening
You can directly double-click `index.html` to open it in Google Chrome, Microsoft Edge, or Firefox.

### Option 3: Python Command Line
Open PowerShell or Command Prompt in the `enjoy_holidays_travel` folder:
```bash
python server.py
```
Then visit `http://localhost:3000`.

---

## 🧭 Site Structure & Sections Overview

### 1. Full-Screen Cinematic Slideshow
- Rotates through 14 authentic Katra photographs every 5.5 seconds
- Ken Burns zoom-in & zoom-out transitions
- Pause on hover, dot indicators, play/pause, slide counter, and expandable thumbnail strip
- Dual CTAs: **Explore Destinations** and **Plan Your Holiday** + instant WhatsApp button

### 2. Interactive Travel Search & Enquiry Bar
- Destination selector (Vaishno Devi Katra, Kashmir, Ladakh, Himachal, Doodhpathri, etc.)
- Calendar travel date picker
- Travellers selector (Solo, Couple, Family, Group)
- Tour Category filter

### 3. Popular Destinations (19 Handcrafted Destination Cards)
- **Jammu & Kashmir**: Vaishno Devi Katra, Srinagar, Gulmarg, Pahalgam, Sonamarg, Dal Lake, Doodhpathri
- **Ladakh**: Leh, Nubra Valley, Pangong Lake, Khardung La
- **Himachal Pradesh**: Manali, Shimla, Dharamshala, Dalhousie, Kasol
- **Outstation & International**: Amritsar Golden Temple, Rajasthan Palaces, Goa Beaches, Kedarnath, Dubai, Thailand, Singapore

### 4. Featured Tour Packages (17 Complete Packages)
1. **Vaishno Devi Darshan & Katra Pilgrimage** (3D/2N) — features original Katra hilltop photo
2. **Kashmir Paradise Tour** (6D/5N)
3. **Romantic Kashmir Honeymoon Special** (6D/5N)
4. **Kashmir Family Fun & Heritage Holiday** (7D/6N)
5. **Classic Srinagar, Gulmarg & Pahalgam Triangle** (5D/4N)
6. **Leh Ladakh High-Pass Himalayan Adventure** (7D/6N)
7. **Manali & Shimla Classic Himachal Tour** (6D/5N)
8. **Dharamshala, McLeodganj & Dalhousie Serenity Tour** (5D/4N) — features original Dalhousie-Chamunda poster
9. **Amritsar Golden Temple & Wagah Border Tour** (3D/2N)
10. **Royal Rajasthan Heritage & Palaces Tour** (7D/6N)
11. **Goa Beach Holiday & Cruise Package** (4D/3N)
12. **Dubai International Extravaganza** (5D/4N)
13. **Kashmir & Vaishno Devi Combined Grand Tour** (7D/6N) — features original ₹16,200/- flyer
14. **9 Devi Darshan Himalayan Holy Temple Tour** (7D/6N)
15. **Amritsar, Dharamshala & Katra Pilgrimage** (9D/8N)
16. **Andaman Emerald Islands & Coral Beach Tour** (5D/4N)
17. **Nepal Himalayan Grandeur (Kathmandu & Pokhara)** (6D/5N)

### 5. Taxi & Transportation Fleet
- Features actual vehicles: Force Tempo Traveller (JK20C 4434), Super High Deck Volvo Coach, Kia Carens, Innova Crysta, Swift Dzire
- Route matrix with fixed fares for Katra to Jammu Railway, Airport, Shivkhori, Srinagar, and Outstation
- Taxi booking form + instant WhatsApp reservation

### 6. Hotel Booking Assistance
- Covers verified Katra hotels near station/track, traditional Dal Lake houseboats, and Pahalgam river resorts
- Clear hotel requirement form with transparent confirmation disclaimer

### 7. About Us Section
- Features real Katra office interior (`unnamed (5).webp`) on Ban Ganga Road
- Mission, vision, core pillars, and local Katra hospitality

### 8. Filterable Photo Gallery
- Categories: All Photos, **Our Office & Fleet**, Vaishno Devi, Srinagar, Gulmarg, Pahalgam, Sonamarg, Ladakh, Himachal, Amritsar
- Full-screen lightbox zoom with previous/next controls

### 9. Customer Enquiry & WhatsApp System
- Modal form with instant validation
- Generates unique reference code (`ENQ-XXXXXX`)
- Direct forward to WhatsApp with prefilled message
- Saves to `localStorage` + server API

### 10. Admin Portal
- Protected with password: `katra2026`
- View, search, and manage incoming customer enquiries
- Add or edit tour packages and download enquiry logs as CSV

---

## 🛠️ Technology Stack

- **Frontend:** React 18 (UMD Production), Tailwind CSS (CDN), Custom SVG Vector Icons
- **Typography:** Playfair Display & Plus Jakarta Sans via Google Fonts
- **Backend (Optional):** Python 3 HTTP Server (`server.py`) with JSON API endpoints
- **Data Persistence:** Client-side LocalStorage fallback + `data/enquiries.json`

---

© 2026 Enjoy Holidays Tour and Travel, Katra, Jammu & Kashmir. All rights reserved.
