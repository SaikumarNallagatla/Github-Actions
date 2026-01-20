# Use official Node.js runtime as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (only if needed — we have none, but good practice)
RUN npm ci --only=production

# Copy app code
COPY . .

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]