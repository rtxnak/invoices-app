FROM node:lts-alpine

RUN yarn global add @vue/cli

WORKDIR /

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["yarn" , "serve"]