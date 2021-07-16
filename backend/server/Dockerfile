#  Dockerfile for Node Express Backend
FROM node:15-alpine 

ARG QUESTION_DB_SSH_KEY

RUN apk update && \
    apk add git

RUN apk add git openssh-client

# Add Curl
RUN apk --no-cache add curl

# Install the Doppler CLI for environment variables
RUN (curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh

RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

# Create App Directory
WORKDIR /app

COPY package.json yarn.lock /app/

RUN ssh-agent sh -c 'echo $QUESTION_DB_SSH_KEY | base64 -d | ssh-add -; yarn install --frozen-lockfile'

COPY . .
RUN yarn build

# Exports
EXPOSE 5000

CMD ["doppler", "run", "--", "yarn","prod"]