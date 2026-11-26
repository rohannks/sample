
# Use Node.js 22 as the base image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy application files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining source code
COPY . .

# Application listens on port 3000
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
