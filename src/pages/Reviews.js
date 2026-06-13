import React, { useState, useRef, useEffect } from 'react';
import styles from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('hollyhub_reviews') || '[]');
    } catch { return []; }
  });

  const titleRef = useRef(null);
  const bodyRef = useRef(null);
  const [error, setError] = useState('');

  useEffect(() => {
    localStorage.setItem('hollyhub_reviews', JSON.stringify(reviews));
  }, [reviews]);

  function handleSubmit(e) {
    e.preventDefault();
    const title = titleRef.current.value.trim();
    const body = bodyRef.current.value.trim();
    if (!title || !body) { setError('Please fill in both fields.'); return; }
    setError('');
    setReviews(prev => [{ id: Date.now(), title, body, date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) }, ...prev]);
    titleRef.current.value = '';
    bodyRef.current.value = '';
  }

  function deleteReview(id) {
    setReviews(prev => prev.filter(r => r.id !== id));
  }

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <p className={styles.eyebrow}>Community</p>
        <h1 className={styles.title}>Reviews</h1>
        <p className={styles.subtitle}>Share your thoughts on Hollywood cinema</p>
      </div>
      <div className={styles.curtain} />

      <div className={styles.layout}>
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <h2 className={styles.formTitle}>Write a review</h2>
          <input ref={titleRef} type="text" placeholder="Film title" className={styles.input} />
          <textarea ref={bodyRef} placeholder="Your review..." className={styles.textarea} rows={5} />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit" className={styles.submitBtn}>Post review</button>
        </form>

        <div className={styles.reviewList}>
          {reviews.length === 0 ? (
            <p className={styles.empty}>No reviews yet. Be the first.</p>
          ) : (
            reviews.map(r => (
              <div key={r.id} className={styles.reviewCard}>
                <div className={styles.reviewTop}>
                  <h3 className={styles.reviewFilm}>{r.title}</h3>
                  <span className={styles.reviewDate}>{r.date}</span>
                </div>
                <p className={styles.reviewBody}>{r.body}</p>
                <button className={styles.deleteBtn} onClick={() => deleteReview(r.id)} aria-label="Delete review">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
