
import React from 'react';

function Home() {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)',
      fontFamily: 'Montserrat, sans-serif',
      animation: 'fadeIn 1.2s',
    }}>
      <div style={{
        fontSize: '5rem',
        marginBottom: '18px',
        animation: 'bounce 1.5s infinite',
      }}>
        📊
      </div>
      <h1 style={{
        color: '#fff',
        fontWeight: 800,
        fontSize: '3.2rem',
        marginBottom: '24px',
        textShadow: '0 2px 8px rgba(33,147,176,0.10)',
        letterSpacing: '2px',
      }}>
        Welcome to <span style={{ color: '#f8ffae' }}>Stock Market Dashboard</span>
      </h1>
      <p style={{
        color: '#fff',
        fontSize: '1.35rem',
        maxWidth: '650px',
        textAlign: 'center',
        marginBottom: '32px',
        textShadow: '0 1px 4px rgba(33,147,176,0.10)',
      }}>
        Track, analyze, and predict stock prices with beautiful charts and AI-powered insights.<br />
        Explore company data, technical indicators, and next-day price forecasts.<br />
        <span style={{ color: '#f8ffae', fontWeight: 600 }}>Get started by visiting the Dashboard!</span>
      </p>
      <a href="/dashboard" style={{
        padding: '14px 36px',
        background: 'linear-gradient(90deg, #f8ffae 0%, #2193b0 100%)',
        color: '#2193b0',
        borderRadius: '32px',
        fontWeight: 700,
        fontSize: '1.2rem',
        textDecoration: 'none',
        boxShadow: '0 2px 8px rgba(33,147,176,0.10)',
        transition: 'background 0.2s',
      }}>Go to Dashboard</a>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}

export default Home;
