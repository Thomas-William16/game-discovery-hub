# 🎮 Dragon's Den — Game Discovery Hub

A modern video game discovery platform built with **React** and **TypeScript**, allowing users to explore, search, and filter games with detailed information and ratings.

> 🔗 **Live Demo:** [dragons-den-gamehub.vercel.app](https://dragons-den-gamehub-i630nztp6-thomas-william16s-projects.vercel.app/)

---

## ✨ Features

- 🔍 **Search** for any game by name in real time
- 🎯 **Filter by Genre** — Action, RPG, Strategy, Shooter, and more
- 🕹️ **Filter by Platform** — PlayStation, Xbox, PC, Nintendo, and more
- 📊 **Sort** by relevance, date added, name, or Metacritic score
- ⭐ **Critic Scores** displayed per game via Metacritic
- 🎭 **Emoji Ratings** based on user rating score
- 🌙 **Dark / Light Mode** toggle
- 🖼️ **Hero Banner** showcasing a featured game dynamically
- 📱 **Responsive Design** — works on desktop and mobile

---

## 🛠️ Tech Stack

| Technology | Purpose                     |
| ---------- | --------------------------- |
| React 18   | UI framework                |
| TypeScript | Type safety                 |
| Chakra UI  | Component library & theming |
| Axios      | API requests                |
| RAWG API   | Game data source            |
| Vite       | Build tool                  |
| Vercel     | Deployment                  |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A free [RAWG API key](https://rawg.io/apidocs)

---

## 📁 Project Structure

```
src/
├── assets/          # Static assets & images
├── components/      # Reusable UI components
│   ├── GameCard.tsx
│   ├── GameGrid.tsx
│   ├── GenreList.tsx
│   ├── HeroBanner.tsx
│   ├── NavBar.tsx
│   ├── PlatformSelector.tsx
│   ├── SortSelector.tsx
│   └── ...
├── hooks/           # Custom React hooks
│   ├── useGames.ts
│   ├── useGenres.ts
│   ├── usePlatforms.ts
│   └── useData.ts
├── Services/        # API client setup
│   ├── api-client.ts
│   └── image-url.ts
└── App.tsx          # Root component
```

---

## 🌐 Deployment

This project is deployed on **Vercel**. Every push to `main` triggers an automatic redeployment.

```bash
# Deploy manually via Vercel CLI
vercel --prod
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ by <a href="https://github.com/Thomas-William16">Thomas William</a></p>
