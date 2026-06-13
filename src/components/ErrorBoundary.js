import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('HollyHub error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          background: '#0d0608',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          fontFamily: "'Jost', sans-serif",
        }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '32px', color: '#d4af50' }}>
            Something went wrong.
          </p>
          <p style={{ fontSize: '13px', color: '#5a3a2a' }}>
            The projection booth encountered an error.
          </p>
          <button
            onClick={() => this.setState({ hasError: false })}
            style={{
              background: '#8b1a1a', border: 'none', borderRadius: '2px',
              color: '#d4af50', fontFamily: "'Jost', sans-serif",
              fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '9px 20px', cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
