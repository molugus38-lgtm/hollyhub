# HollyHub

A Hollywood movies library built with React — theater red, black, and gold theme.

## Setup

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

## Build for production

```bash
npm run build
```

## Features

- Browse 24 Hollywood films with real poster images
- Filter by genre (Drama, Thriller, Sci-Fi, Crime, Action, Romance, Horror)
- Live search with dedicated results page
- Click any film for detail page
- Watchlist (saved in sessionStorage)
- Reviews page (saved in localStorage) with uncontrolled form using useRef
- SPA routing with React Router v6 (nested, dynamic `/film/:id`, protected fallback)
- Error boundary with fallback UI
- Container/presenter component pattern (App manages state, pages/cards are presenters)
- Controlled components (GenreFilter, Header search input)
- Uncontrolled components (Reviews form via useRef)

## Rubric Coverage

| Concept | Implementation |
|---|---|
| Controlled components (useState) | GenreFilter, Header search |
| Uncontrolled components (useRef) | Reviews form title & body refs |
| Form validation | Reviews — checks empty fields before submit |
| Container/presenter | App.js (container) + MovieCard, GenreFilter (presenters) |
| Error boundary | src/components/ErrorBoundary.js |
| Browser storage (sessionStorage + useEffect) | Watchlist persisted via sessionStorage |
| State management (lifted state) | watchlist & search lifted to App.js |
| SPA routing (basic, dynamic, protected) | React Router v6 — `/`, `/watchlist`, `/reviews`, `/film/:id`, `/search`, `*` redirect |
| Deployment | Deploy to Netlify/Vercel by running `npm run build` |
