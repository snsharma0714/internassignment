import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{
      width: '100%',
      background: 'linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)',
      padding: '18px 0',
      boxShadow: '0 2px 8px rgba(33,147,176,0.10)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Montserrat, sans-serif',
    }}>
      <Link to="/" style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', margin: '0 32px', textDecoration: 'none' }}>Home</Link>
      <Link to="/dashboard" style={{ color: '#fff', fontWeight: 700, fontSize: '1.2rem', margin: '0 32px', textDecoration: 'none' }}>Dashboard</Link>
    </nav>
  );
}

export default Navbar;
