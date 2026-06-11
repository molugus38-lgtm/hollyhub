import React, { useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header({ search, onSearch }) {
  const location = useLocation();
  const inputRef = useRef(null);
  const [focused, setFocused] = useState(false);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        Holly<span>Hub</span>
      </Link>

      <nav className={styles.nav}>
        <Link to="/" className={`${styles.navLink} ${location.pathname === '/' ? styles.active : ''}`}>Films</Link>
        <Link to="/watchlist" className={`${styles.navLink} ${location.pathname === '/watchlist' ? styles.active : ''}`}>Watchlist</Link>
        <Link to="/reviews" className={`${styles.navLink} ${location.pathname === '/reviews' ? styles.active : ''}`}>Reviews</Link>
      </nav>

      <div className={`${styles.searchWrap} ${focused ? styles.searchFocused : ''}`}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" className={styles.searchIcon}>
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search the vault..."
          value={search}
          onChange={e => onSearch(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={styles.searchInput}
          aria-label="Search films"
        />
        {search && (
          <button className={styles.clearBtn} onClick={() => onSearch('')} aria-label="Clear search">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}
