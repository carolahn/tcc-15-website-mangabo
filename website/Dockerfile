# Use an official Node.js runtime as the base image

FROM node:16-alpine
# Set the working directory within the container
WORKDIR /website

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variable using the build argument
ARG REACT_APP_CACHE_BUSTER
ENV REACT_APP_CACHE_BUSTER ${REACT_APP_CACHE_BUSTER}

ARG REACT_APP_API_URL
ENV REACT_APP_API_URL ${REACT_APP_API_URL}

# Build the React app
RUN npm run build

# Build the React app
EXPOSE 3000