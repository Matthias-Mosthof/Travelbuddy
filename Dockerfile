FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
RUN  yarn install
EXPOSE 8080
CMD ["yarn", "run", "serve"]


# docker-composer up # to start the compilation process
# to install npm package run
# docker-compose exec web npm i bootstrap