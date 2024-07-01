# frontend/Dockerfile

# Use the official Node.js 16 image as a base
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the app runs on
EXPOSE 5173

# Define the command to run the app
CMD ["npm", "start"]
