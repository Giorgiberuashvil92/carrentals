### STAGE 1: Build ###

# We label our stage as ‘builder’
FROM node:12.19-stretch as builder

ARG BUILD_ENV

COPY package.json package-lock.json ./
COPY packages packages

## Storing node modules on a separate layer will prevent unnecessary npm installs at each build

RUN npm ci && mkdir /ng-app && mv ./node_modules ./ng-app

WORKDIR /ng-app

COPY . .

## Build the angular app in production mode and store the artifacts in dist folder
RUN npm run build:ssr-${BUILD_ENV}

FROM node:latest
WORKDIR /app
EXPOSE 80

# install supervisor to run nginx and node ssr at the same time
RUN apt-get update && apt-get install -y  supervisor

COPY --from=builder /ng-app/supervisor/node.conf /etc/supervisor/conf.d/node.conf
COPY --from=builder /ng-app/supervisor/nginx.conf /etc/supervisor/conf.d/nginx.conf

# install nginx
RUN apt-get update && apt-get install -y  nginx

COPY nginx/nginx.conf /etc/nginx/nginx.conf

## Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

## From ‘builder’ stage copy over the artifacts in dist folder to default nginx public folder
COPY --from=builder /ng-app/dist /app/dist
COPY --from=builder /ng-app/node_modules /app/node_modules
COPY --from=builder /ng-app/package.json /app


CMD ["/usr/bin/supervisord"]
