


import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CompanyList from './components/CompanyList';
import StockChart from './components/StockChart';
import IndicatorsPanel from './components/IndicatorsPanel';
import PredictionPanel from './components/PredictionPanel';



function Dashboard() {
  const [companies, setCompanies] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [stockData, setStockData] = useState([]);
  const [indicators, setIndicators] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
  fetch('http://localhost:8000/companies')
      .then(res => res.json())
      .then(data => setCompanies(data))
      .catch(() => setError('Failed to fetch companies'));
  }, []);

  useEffect(() => {
    if (selectedCompany) {
      setLoading(true);
      setError(null);
      // Fetch stock data
  fetch(`http://localhost:8000/stock/${selectedCompany}`)
        .then(res => res.json())
        .then(data => setStockData(data))
        .catch(() => setError('Failed to fetch stock data'));
      // Fetch indicators
  fetch(`http://localhost:8000/indicators/${selectedCompany}`)
        .then(res => res.json())
        .then(data => setIndicators(data))
        .catch(() => setError('Failed to fetch indicators'));
      // Fetch prediction
  fetch(`http://localhost:8000/predict/${selectedCompany}`)
        .then(res => res.json())
        .then(data => setPrediction(data))
        .catch(() => setError('Failed to fetch prediction'));
      setLoading(false);
    } else {
      setStockData([]);
      setIndicators(null);
      setPrediction(null);
    }
  }, [selectedCompany]);

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #c2e9fb 0%, #81a4fd 100%)',
      fontFamily: 'Montserrat, sans-serif',
    }}>
      <CompanyList
        companies={companies}
        onSelect={setSelectedCompany}
        selected={selectedCompany}
      />
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 5vw',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minWidth: 0,
      }}>
        <h1 style={{
          color: '#2193b0',
          fontWeight: 800,
          fontSize: '2.5rem',
          marginBottom: '32px',
          letterSpacing: '2px',
          textShadow: '0 2px 8px rgba(33,147,176,0.10)',
        }}>Stock Market Dashboard</h1>
        {error && <div style={{ color: 'red', marginBottom: '12px' }}>{error}</div>}
        {selectedCompany && <IndicatorsPanel indicators={indicators} />}
        {selectedCompany && <PredictionPanel prediction={prediction} />}
        <StockChart data={stockData} company={selectedCompany} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
