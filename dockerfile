# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the local code to the container
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port Next.js is running on
EXPOSE 3000

# Define the command to run your Next.js application
CMD ["npm", "start"]
