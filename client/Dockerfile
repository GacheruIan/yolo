# Build stage
FROM node:14-slim AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install application dependencies
RUN npm install --only=production

# Copy the rest of the application code to the container
COPY . .

# Production stage using Alpine
FROM node:14-alpine

WORKDIR /app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app /app

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
