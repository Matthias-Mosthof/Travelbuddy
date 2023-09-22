FROM node:lts-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
EXPOSE 9000
CMD ["yarn", "dev"]