![NFT Marketplace CI](https://github.com/jamespa001/james-internship/actions/workflows/ci.yml/badge.svg)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://nft-marketplace-internship.vercel.app/)

# 🎨 Web3 NFT Marketplace Application

[**🌐 View Live Platform**](https://nft-marketplace-internship.vercel.app/) | [**🛠️ GitHub Repository**](https://github.com/jamespa001/james-internship)

An interactive Web3 NFT marketplace interface engineered with **React**, **Tailwind CSS**, **Firebase Firestore**, and **AOS (Animate On Scroll)** for discovering, filtering, and trading digital collections.

---

## 🛠️ Engineering Highlights & Architecture

- **Problem & Context:** Data-heavy Web3 marketplace interfaces often suffer from layout shift and poor perceived speed while fetching high-resolution media assets and dynamic auction data.
- **Key Technical Decisions:**
  - Designed custom skeleton loading state components to eliminate Cumulative Layout Shift (CLS) during asynchronous asset and creator profile fetches.
  - Implemented live JavaScript countdown timers for active collection auctions and syncs realtime collection data via **Firebase Firestore**.
  - Integrated **AOS (Animate On Scroll)** to deliver continuous, high-FPS scroll animation transitions across featured collection grids.
- **Results & Metrics:**
  - ⚡ Substantially improved perceived user load times with fluid skeleton states.
  - 🚀 Continuous integration workflow verification via **GitHub Actions**.
  - 📱 Fully responsive layout across mobile, tablet, and desktop viewports.

---

## ✨ Features

- **Asset Exploration & Filtering**: Dynamic search, tag filtering, and categorization across digital items, collections, and creators.
- **Realtime Auction Timers**: Dynamic client-side countdown clocks tracking active bid expirations.
- **Fluid Scroll Animations**: Optimized scroll-triggered micro-interactions using AOS.
- **Responsive Web Design**: Mobile-first clean grid architecture built with Tailwind CSS.
- **Automated CI/CD**: GitHub Actions pipeline validating dependencies and build integrity on every commit.

---

## 🛠️ Tech Stack

- **Framework**: React / Next.js
- **Styling**: Tailwind CSS, AOS (Animate On Scroll)
- **Database & Services**: Firebase Firestore
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

---

## 🚀 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/jamespa001/james-internship.git](https://github.com/jamespa001/james-internship.git)
   cd james-internship
   ```
