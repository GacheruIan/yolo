# Build stage
FROM node:14-alpine AS build

WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install 

# Copy all source code
COPY . .

# Production stage (lightweight)
FROM alpine:3.16.7

WORKDIR /app

# Install Node.js
RUN apk add --no-cache nodejs npm

# Copy the built app from the previous build stage
COPY --from=build /usr/src/app /app

# Expose the port for the backend
EXPOSE 5000

# Start the backend service
CMD ["npm", "start"]
