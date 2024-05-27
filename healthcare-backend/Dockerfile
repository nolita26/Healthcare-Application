# Use a base image
FROM python:3.8-slim

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
COPY requirements.txt ./

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy application code to the container image.
COPY . .

# Start the application
CMD [ "python", "./app.py" ]
