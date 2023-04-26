# Use the official Node.js 16 image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app dependencies
RUN yarn install

# Copy the rest of the app files to the container
COPY . .

# Build the app for production
# RUN yarn run build

# Set port
# EXPOSE 3000

# Start the app
CMD [ "yarn", "run", "dev"]
# test mode

# cheatsheet
# docker build -t quotes-app .
# docker run -p 3000:3000 quotes-app
