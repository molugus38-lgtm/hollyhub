import React, { useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import movies from '../data/movies';
import styles from './FilmDetail.module.css';

export default function FilmDetail({ watchlist, onWatchlist }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const reviewRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  const movie = movies.find(m => m.id === Number(id));
  if (!movie) return <div className={styles.notFound}>Film not found.</div>;

  const isWatchlisted = watchlist.some(w => w.id === movie.id);

  function handleReviewSubmit(e) {
    e.preventDefault();
    const val = reviewRef.current.value.trim();
    if (val) { setSubmitted(true); reviewRef.current.value = ''; }
  }

  return (
    <main className={styles.main}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
          <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
        </svg>
        Back
      </button>

      <div className={styles.hero}>
        <div className={styles.posterWrap}>
          <img src={movie.img} alt={movie.title} className={styles.poster}
            onError={e => { e.target.style.display='none'; }} />
          <div className={styles.posterGlow} />
        </div>

        <div className={styles.details}>
          <p className={styles.genre}>{movie.genre}</p>
          <h1 className={styles.title}>{movie.title}</h1>
          <div className={styles.meta}>
            <span className={styles.year}>{movie.year}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.director}>{movie.director}</span>
            <span className={styles.dot}>·</span>
            <span className={styles.rating}>{movie.rating} / 10</span>
          </div>

          <button
            className={`${styles.watchlistBtn} ${isWatchlisted ? styles.added : ''}`}
            onClick={() => onWatchlist(movie)}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill={isWatchlisted ? '#d4af50' : 'none'} stroke="#d4af50" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
            </svg>
            {isWatchlisted ? 'In Watchlist' : 'Add to Watchlist'}
          </button>

          <div className={styles.reviewSection}>
            <h2 className={styles.reviewHeading}>Leave a review</h2>
            {submitted && (
              <p className={styles.thanks}>Review submitted. Thank you.</p>
            )}
            <form onSubmit={handleReviewSubmit} className={styles.reviewForm}>
              <textarea
                ref={reviewRef}
                className={styles.textarea}
                placeholder="Your thoughts on this film..."
                rows={4}
              />
              <button type="submit" className={styles.submitBtn}>Submit review</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
