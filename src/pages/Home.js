import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import GenreFilter from '../components/GenreFilter';
import movies from '../data/movies';
import styles from './Home.module.css';

export default function Home({ watchlist, onWatchlist }) {
  const [activeGenre, setActiveGenre] = useState('All');

  const filtered = movies.filter(m => {
    const genreMatch = activeGenre === 'All' || m.genre === activeGenre;
    return genreMatch;
  });

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <p className={styles.eyebrow}>Hollywood CineVault</p>
        <h1 className={styles.title}>Holly<span>Hub</span></h1>
        <p className={styles.subtitle}>Your personal seat in the dark</p>
      </div>

      <div className={styles.curtain} />

      <GenreFilter activeGenre={activeGenre} onChange={setActiveGenre} />

      <div className={styles.divider}>
        <span>
          {filtered.length} film{filtered.length !== 1 ? 's' : ''}
          {activeGenre !== 'All' ? ` · ${activeGenre}` : ''}
        </span>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No films found in the vault.</p>
      ) : (
        <div className={styles.grid}>
          {filtered.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onWatchlist={onWatchlist}
              isWatchlisted={watchlist.some(w => w.id === movie.id)}
            />
          ))}
        </div>
      )}
    </main>
  );
}
