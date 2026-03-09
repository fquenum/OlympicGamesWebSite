#  Olympic Games — React

Data visualization application for the Olympic Games,
migrated from Angular to React to demonstrate proficiency in both frameworks.

##  Tech Stack

- **React 18** + **TypeScript**
- **Vite** — build tool
- **React Router v6** — SPA navigation
- **Recharts** — data visualization
- **CSS Modules** — component-scoped styles

## Features

- Home page with a **PieChart** displaying medals per country
- Click on a chart slice to navigate to a **country detail page**
- Detail page with a **LineChart** showing medals per year
- Statistics: number of participations, total medals, total athletes
- Custom **404** page
- **Loading / error** state handling

##  Architecture
```
src/
├── components/        # Reusable components (PieChart, LineChart)
├── pages/             # Routing components (Home, Detail, NotFound)
├── core/
│   ├── models/        # TypeScript interfaces
│   └── hooks/         # Custom hooks (useOlympics)
```

##  Getting Started
```bash
git clone https://github.com/fquenum/OlympicGamesWebSite.git
cd OlympicGamesWebSite
npm install
npm run dev
```

## 🔄 Angular → React Comparison

| Concept | Angular | React |
|---|---|---|
| Reactive data | `Observable` + `AsyncPipe` | `useState` + `useEffect` |
| Business logic | Injected `Service` | Custom hook |
| Routing | `RouterModule` | `React Router` |
| Scoped styles | `.component.scss` | `.module.css` |
| Charts | `ngx-charts` | `Recharts` |

## 📁 Original Angular Project

👉 [See the Angular version]https://github.com/fquenum/P2_OlympicGamesWebSite