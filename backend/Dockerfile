# Use a smaller base image (Alpine-based Node)
FROM node:14-alpine AS build

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy the rest of the application code to the container
COPY . .

# Use a very lightweight base for the final image
FROM alpine:3.16.7

WORKDIR /app

# Install Node.js runtime
RUN apk add --no-cache nodejs

# Copy the built application from the previous build stage
COPY --from=build /usr/src/app /app

# Expose the port the app runs on
EXPOSE 5000

# Define the command to run your app
CMD ["node", "server.js"]
