
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import sqlite3
from typing import List, Dict

app = FastAPI()

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "./stocks.db"

def get_db_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn

@app.get("/companies", response_model=List[str])
def get_companies():
    conn = get_db_connection()
    companies = conn.execute("SELECT DISTINCT company FROM stocks").fetchall()
    conn.close()
    return [row["company"] for row in companies]

@app.get("/stock/{company}", response_model=List[Dict])
def get_stock_data(company: str):
    conn = get_db_connection()
    data = conn.execute("SELECT * FROM stocks WHERE company = ? ORDER BY date", (company,)).fetchall()
    conn.close()
    if not data:
        raise HTTPException(status_code=404, detail="Company not found or no data available.")
    return [dict(row) for row in data]

# Endpoint: Get technical indicators (52-week high/low, moving average)
@app.get("/indicators/{company}")
def get_indicators(company: str):
    conn = get_db_connection()
    data = conn.execute("SELECT close FROM stocks WHERE company = ? ORDER BY date DESC LIMIT 252", (company,)).fetchall()
    conn.close()
    if not data:
        return {"52_week_high": None, "52_week_low": None, "moving_average_20": None, "message": "Company not found or no data available."}
    closes = [row["close"] for row in data]
    high_52w = max(closes)
    low_52w = min(closes)
    ma_20 = sum(closes[:20]) / 20 if len(closes) >= 20 else None
    return {
        "52_week_high": high_52w,
        "52_week_low": low_52w,
        "moving_average_20": ma_20
    }

# Endpoint: Next-day price prediction (simple linear regression)
@app.get("/predict/{company}")
def predict_next_day(company: str):
    import numpy as np
    conn = get_db_connection()
    data = conn.execute("SELECT date, close FROM stocks WHERE company = ? ORDER BY date", (company,)).fetchall()
    conn.close()
    closes = [row["close"] for row in data]
    if not closes:
        return {"predicted_next_close": None, "message": "No data available for prediction."}
    if len(closes) == 1:
        return {"predicted_next_close": round(float(closes[0]), 2), "message": "Only one data point available."}
    try:
        x = np.arange(len(closes))
        m, c = np.polyfit(x, closes, 1)
        next_x = len(closes)
        next_close = m * next_x + c
        return {"predicted_next_close": round(float(next_close), 2)}
    except Exception as e:
        return {"predicted_next_close": None, "message": f"Prediction error: {str(e)}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
