#FROM python:3.11-slim-buster
FROM bmltenabled/uvicorn-gunicorn-fastapi:python3.10-slim

WORKDIR /app

#COPY requirements.txt requirements.txt

#RUN python -m pip install --upgrade pip

#RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
