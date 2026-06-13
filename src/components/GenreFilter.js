import React from 'react';
import styles from './GenreFilter.module.css';

const GENRES = ['All', 'Drama', 'Thriller', 'Sci-Fi', 'Crime', 'Action', 'Romance', 'Horror'];

export default function GenreFilter({ activeGenre, onChange }) {
  return (
    <div className={styles.filters} role="group" aria-label="Filter by genre">
      {GENRES.map(genre => (
        <button
          key={genre}
          className={`${styles.pill} ${activeGenre === genre ? styles.active : ''}`}
          onClick={() => onChange(genre)}
          aria-pressed={activeGenre === genre}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
