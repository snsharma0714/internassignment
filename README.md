# Stock Market Dashboard Web Application

## Overview
A full-stack web application to visualize stock market data, technical indicators, and AI-based price predictions. Built with FastAPI (Python) for the backend and ReactJS for the frontend.

## Features
- Responsive UI with ReactJS
- Left panel: Scrollable list of company names
- Main panel: Chart area for stock price visualization (Chart.js)
- Technical indicators: 52-week high/low, 20-day moving average
- AI-based next-day price prediction (scikit-learn LinearRegression)
- REST API with FastAPI
- Data stored in SQLite (sample CSV dataset)
- Dockerized backend for easy deployment

## Folder Structure
```
intASssign/
├── backend/        # FastAPI backend
│   ├── main.py
│   ├── init_db.py
│   ├── sample_stocks.csv
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/       # ReactJS frontend
│   └── ...
└── README.md
```

## Setup Instructions

### 1. Backend (FastAPI)
- Install dependencies:
  ```bash
  cd backend
  python -m venv .venv
  .venv\Scripts\activate
  pip install -r requirements.txt
  ```
- Initialize the database:
  ```bash
  python init_db.py
  ```
- Run the server:
  ```bash
  python main.py
  ```
- API available at `http://localhost:8000`

### 2. Frontend (ReactJS)
- Install dependencies:
  ```bash
  cd frontend
  npm install
  ```
- Start the development server:
  ```bash
  npm start
  ```
- Frontend available at `http://localhost:3000`

### 3. Docker (Backend Only)
- Build and run the backend Docker image:
  ```bash
  cd backend
  docker build -t stock-backend .
  docker run -p 8000:8000 stock-backend
  ```

## Deployment
- For production, build the React app and serve static files via FastAPI or a web server (Nginx, etc.).
- You can deploy backend and frontend separately on platforms like Render, Railway, Vercel, etc.

## Development Approach
- Modular code structure for easy maintenance
- RESTful API design for frontend/backend separation
- Used scikit-learn for simple, extensible AI prediction
- Dockerized backend for portability

## Technologies Used
- FastAPI (Python)
- ReactJS
- Chart.js
- SQLite
- scikit-learn
- Docker

## Challenges Encountered
- Ensuring smooth integration between frontend and backend
- Handling CORS for local development
- Designing a simple but extensible AI prediction system

## Sample Data
See `backend/sample_stocks.csv` for mock stock data.

## Screenshots
Add screenshots of your running app here.

## License
MIT
