FROM node:alpine

WORKDIR /server
COPY package*.json ./
RUN npm install -g pnpm

COPY ./contract ./contract
RUN pnpm install --prod=false
RUN apk add --no-cache curl \
    && curl -L https://github.com/golang-migrate/migrate/releases/download/v4.15.2/migrate.linux-amd64.tar.gz | tar xvz \
    && mv migrate /usr/local/bin/

COPY ./server .
EXPOSE 3000
CMD ["pnpm", "start"]
