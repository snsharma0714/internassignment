
import React from 'react';

function IndicatorsPanel({ indicators }) {
  if (!indicators) return <div style={{
    background: 'linear-gradient(135deg, #f8ffae 0%, #43cea2 100%)',
    borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(67,206,162,0.12)',
    padding: '20px',
    marginBottom: '18px',
    fontFamily: 'Montserrat, sans-serif',
    color: '#333',
    fontSize: '1.1rem',
  }}>Loading indicators...</div>;
  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8ffae 0%, #43cea2 100%)',
      borderRadius: '12px',
      boxShadow: '0 2px 8px rgba(67,206,162,0.12)',
      padding: '20px',
      marginBottom: '18px',
      fontFamily: 'Montserrat, sans-serif',
      color: '#333',
      fontSize: '1.1rem',
    }}>
      <h4 style={{ marginBottom: '12px', color: '#2193b0', fontWeight: 700 }}>Technical Indicators</h4>
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
        <div><span role="img" aria-label="high">🔼</span> 52-Week High: <b>{indicators["52_week_high"]}</b></div>
        <div><span role="img" aria-label="low">🔽</span> 52-Week Low: <b>{indicators["52_week_low"]}</b></div>
        <div><span role="img" aria-label="ma">📈</span> 20-Day MA: <b>{indicators["moving_average_20"]}</b></div>
      </div>
    </div>
  );
}

export default IndicatorsPanel;
