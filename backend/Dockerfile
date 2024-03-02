# 
FROM python:3.9

# 
WORKDIR /app/backend

# 
COPY requirements.txt /app/backend/requirements.txt

# 
RUN pip install --no-cache-dir --upgrade -r /app/backend/requirements.txt

# 
COPY app /app/backend/app

# 
CMD ["uvicorn", "app.src.main:app", "--host", "0.0.0.0", "--port", "8080"]
