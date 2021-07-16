#  Dockerfile for Node Express Backend
FROM node:15-alpine 

RUN apk update && \
    apk add git

# Add Curl
RUN apk --no-cache add curl

# Install the Doppler CLI for environment variables
RUN (curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh

# Create backend Directory
WORKDIR /backend

# Paths relative to backend directory
COPY ./server/package.json ./server/yarn.lock backend/server/
COPY ./database/models ./database/utils backend/database/

COPY . .
RUN yarn --cwd ./server install
RUN yarn --cwd ./server build

# Exports
EXPOSE 5000

CMD ["doppler", "run", "--", "yarn", "--cwd", "./server","prod"]