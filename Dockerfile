FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn global add @quasar/cli
RUN yarn install
EXPOSE 9000
CMD ["yarn", "dev"]