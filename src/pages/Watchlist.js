import React from 'react';
import MovieCard from '../components/MovieCard';
import styles from './Watchlist.module.css';

export default function Watchlist({ watchlist, onWatchlist }) {
  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <p className={styles.eyebrow}>Saved Films</p>
        <h1 className={styles.title}>Your Watchlist</h1>
        <p className={styles.subtitle}>{watchlist.length} film{watchlist.length !== 1 ? 's' : ''} saved</p>
      </div>
      <div className={styles.curtain} />

      {watchlist.length === 0 ? (
        <div className={styles.empty}>
          <p>Your watchlist is empty.</p>
          <p className={styles.emptySub}>Browse films and bookmark your picks.</p>
        </div>
      ) : (
        <div className={styles.grid}>
          {watchlist.map(movie => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onWatchlist={onWatchlist}
              isWatchlisted={true}
            />
          ))}
        </div>
      )}
    </main>
  );
}
