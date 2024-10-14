# Build stage
FROM node:14-slim AS build

WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install 

# Copy the rest of the client code
COPY . .

# Build the React app for production
RUN npm run build

# Production stage (lightweight)
FROM node:14-alpine

WORKDIR /app

# Copy the build files from the previous stage
COPY --from=build /usr/src/app /app

# Expose the port for the frontend
EXPOSE 3000

# Start the client service
CMD ["npm", "start"]
