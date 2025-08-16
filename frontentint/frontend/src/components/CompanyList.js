

import React, { useState } from 'react';

function CompanyList({ companies, onSelect, selected }) {
  const [open, setOpen] = useState(true);
  return (
    <div style={{
      width: open ? '240px' : '48px',
      height: '100vh',
      background: 'linear-gradient(135deg, #6dd5ed 0%, #2193b0 100%)',
      color: '#fff',
      boxShadow: '2px 0 12px rgba(33,147,176,0.15)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: '32px',
      transition: 'width 0.3s',
      position: 'relative',
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'absolute',
          top: '16px',
          right: open ? '-18px' : '-18px',
          background: '#2193b0',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '32px',
          height: '32px',
          boxShadow: '0 2px 8px rgba(33,147,176,0.10)',
          cursor: 'pointer',
          fontSize: '1.2rem',
          zIndex: 2,
        }}
        title={open ? 'Close' : 'Open'}
      >{open ? '⏴' : '⏵'}</button>
      {open && <h2 style={{ fontWeight: 700, letterSpacing: '1px', marginBottom: '24px', fontFamily: 'Montserrat, sans-serif' }}>Companies</h2>}
      {open && <ul style={{ listStyle: 'none', padding: 0, width: '100%' }}>
        {companies.map((company) => (
          <li
            key={company}
            style={{
              padding: '14px 24px',
              margin: '8px 0',
              borderRadius: '12px',
              background: selected === company ? 'rgba(255,255,255,0.15)' : 'transparent',
              boxShadow: selected === company ? '0 2px 8px rgba(33,147,176,0.12)' : 'none',
              cursor: 'pointer',
              fontWeight: selected === company ? 700 : 400,
              fontSize: '1.1rem',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onClick={() => onSelect(company)}
            onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.10)'}
            onMouseOut={e => e.currentTarget.style.background = selected === company ? 'rgba(255,255,255,0.15)' : 'transparent'}
          >
            {company}
          </li>
        ))}
      </ul>}
    </div>
  );
}

export default CompanyList;
