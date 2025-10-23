# Use the official Node.js 20 slim image as a parent image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy the rest of the application source code
COPY . .

# Command to run the application
CMD ["node", "index.js"]
