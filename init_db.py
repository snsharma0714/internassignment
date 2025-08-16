import sqlite3
import csv

DB_PATH = "stocks.db"
CSV_PATH = "sample_stocks.csv"

conn = sqlite3.connect(DB_PATH)
c = conn.cursor()


# Drop and recreate table for a clean load
c.execute("DROP TABLE IF EXISTS stocks")
c.execute("""
CREATE TABLE stocks (
    company TEXT,
    date TEXT,
    open REAL,
    high REAL,
    low REAL,
    close REAL,
    volume INTEGER
)
""")

# Load CSV data
with open(CSV_PATH, newline='') as csvfile:
    reader = csv.DictReader(csvfile)
    rows = [(
        row['company'],
        row['date'],
        float(row['open']),
        float(row['high']),
        float(row['low']),
        float(row['close']),
        int(row['volume'])
    ) for row in reader]
    c.executemany("INSERT INTO stocks (company, date, open, high, low, close, volume) VALUES (?, ?, ?, ?, ?, ?, ?)", rows)

conn.commit()
conn.close()
print("Database initialized with sample data.")
