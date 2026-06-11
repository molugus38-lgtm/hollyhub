import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from './Home.module.css';

export default function SearchResults({ results, query, watchlist, onWatchlist }) {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <p className={styles.eyebrow}>Search results</p>
        <h1 className={styles.title} style={{ fontSize: '32px' }}>"{query}"</h1>
        <p className={styles.subtitle}>{results.length} film{results.length !== 1 ? 's' : ''} found</p>
      </div>
      <div className={styles.curtain} />

      {results.length === 0 ? (
        <p className={styles.empty}>No films matched your search.</p>
      ) : (
        <div className={styles.grid} style={{ paddingTop: '24px' }}>
          {results.map(movie => (
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
