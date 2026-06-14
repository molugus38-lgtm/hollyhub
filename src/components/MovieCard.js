import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie, onWatchlist, isWatchlisted }) {
  const [imgError, setImgError] = useState(false);
  const navigate = useNavigate();

  return (
    <div className={styles.card} onClick={() => navigate(`/film/${movie.id}`)}>
      {imgError ? (
        <div className={styles.placeholder}>
          <span className={styles.placeholderTitle}>{movie.title}</span>
        </div>
      ) : (
        <img
          src={movie.img}
          alt={movie.title}
          className={styles.poster}
          loading="lazy"
          onError={() => setImgError(true)}
        />
      )}

      <div className={styles.overlay} />

      <div className={styles.topRow}>
        <span className={styles.genreTag}>{movie.genre}</span>
        <span className={styles.ratingBadge}>{movie.rating}</span>
      </div>

      <button
        className={`${styles.watchlistBtn} ${isWatchlisted ? styles.watchlisted : ''}`}
        onClick={e => { e.stopPropagation(); onWatchlist(movie); }}
        aria-label={isWatchlisted ? 'Remove from watchlist' : 'Add to watchlist'}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill={isWatchlisted ? '#d4af50' : 'none'} stroke="#d4af50" strokeWidth="2">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        </svg>
      </button>

     <div className={styles.info}>
  <h3 className={styles.title}>{movie.title}</h3>
  <p className={styles.year}>{movie.year}</p>
  <p className={styles.description}>{movie.description}</p>
</div>
    </div>
  );
}
