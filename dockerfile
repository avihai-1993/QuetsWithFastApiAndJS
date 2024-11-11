FROM python:3.11-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# הגדרת נקודת הכניסה לאפליקציה (הנחה: main.py)
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
