
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function StockChart({ data, company }) {
  if (!data || data.length === 0) return <div style={{
    background: 'linear-gradient(135deg, #f8ffae 0%, #43cea2 100%)',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(67,206,162,0.12)',
    padding: '32px',
    marginTop: '24px',
    fontSize: '1.2rem',
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Montserrat, sans-serif',
  }}>Select a company to view stock data.</div>;

  const chartData = {
    labels: data.map((row) => row.date),
    datasets: [
      {
        label: `${company} Close Price`,
        data: data.map((row) => row.close),
        borderColor: 'rgba(33,147,176,1)',
        backgroundColor: 'rgba(33,147,176,0.15)',
        fill: true,
        tension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: '#2193b0',
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          font: {
            family: 'Montserrat, sans-serif',
            size: 16,
            weight: 'bold',
          },
          color: '#2193b0',
        },
      },
      title: {
        display: true,
        text: `${company} Stock Price History`,
        font: {
          family: 'Montserrat, sans-serif',
          size: 20,
          weight: 'bold',
        },
        color: '#2193b0',
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#2193b0',
          font: {
            family: 'Montserrat, sans-serif',
            size: 12,
          },
        },
      },
      y: {
        ticks: {
          color: '#2193b0',
          font: {
            family: 'Montserrat, sans-serif',
            size: 12,
          },
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{
      background: 'linear-gradient(135deg, #f8ffae 0%, #43cea2 100%)',
      borderRadius: '16px',
      boxShadow: '0 4px 24px rgba(67,206,162,0.12)',
      padding: '32px',
      marginTop: '24px',
      height: '400px',
      minWidth: '0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
}

export default StockChart;
