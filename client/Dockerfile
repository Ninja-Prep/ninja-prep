FROM node:15-alpine as build
# Removes source code from browser
ENV GENERATE_SOURCEMAP=false 
ARG DOPPLER_TOKEN
# Add Curl
RUN apk --no-cache add curl

# Install the Doppler CLI for environment variables
RUN (curl -Ls https://cli.doppler.com/install.sh || wget -qO- https://cli.doppler.com/install.sh) | sh

WORKDIR /app

COPY ./package.json /app/package.json
COPY ./yarn.lock /app/yarn.lock

RUN yarn install
COPY . .
RUN doppler run -- yarn build

FROM nginx:stable-alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html