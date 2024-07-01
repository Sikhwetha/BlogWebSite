# backend/Dockerfile

# Use the official Python image as a base
FROM python:3.12.2

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 8000

# Define the command to run the app
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
