### build
FROM node:14.18.1-alpine
RUN apk add --no-cache bash
WORKDIR /app
COPY . ./

RUN npm run env --env=dev
COPY .env.temp .env

RUN npm install

EXPOSE 7777
CMD ["npm", "start"]