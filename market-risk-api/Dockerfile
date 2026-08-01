FROM python:3.10-slim

ENV PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1 \
    DJANGO_SETTINGS_MODULE=soros_backend.settings

WORKDIR /app

# All pinned deps ship prebuilt manylinux wheels, so no compiler toolchain is needed.
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

# Bake the ONNX embedding model (~80MB) + the 602-doc chroma index into the image
RUN python prebuild_index.py

# Collect Django admin static files (served by whitenoise)
RUN python manage.py collectstatic --noinput

# Cloud Run injects $PORT (defaults to 8080). Timeout covers slow yfinance/Gemini calls.
CMD exec gunicorn soros_backend.wsgi:application --bind 0.0.0.0:${PORT:-8080} --workers 2 --timeout 120
