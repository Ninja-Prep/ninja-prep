#  Dockerfile for Node Express Backend

FROM node:latest

# Create App Directory
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./

RUN yarn install --silent

# Copy app source code
COPY . .

# Exports
EXPOSE 5000

CMD ["yarn","start"]