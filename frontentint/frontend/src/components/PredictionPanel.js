
import React from 'react';

function PredictionPanel({ prediction }) {
  if (!prediction) return <div style={{
    background: 'linear-gradient(135deg, #c2e9fb 0%, #81a4fd 100%)',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(129,164,253,0.12)',
    padding: '20px',
    marginBottom: '18px',
    fontFamily: 'Montserrat, sans-serif',
    color: '#333',
    fontSize: '1.1rem',
  }}>Loading prediction...</div>;
  return (
    <div style={{
      background: 'linear-gradient(135deg, #c2e9fb 0%, #81a4fd 100%)',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(129,164,253,0.12)',
      padding: '20px',
      marginBottom: '18px',
      fontFamily: 'Montserrat, sans-serif',
      color: '#333',
      fontSize: '1.1rem',
    }}>
      <h4 style={{ marginBottom: '12px', color: '#2193b0', fontWeight: 700 }}>AI Price Prediction</h4>
      <div><span role="img" aria-label="ai">🤖</span> Next-Day Close: <b>{prediction.predicted_next_close}</b></div>
    </div>
  );
}

export default PredictionPanel;
