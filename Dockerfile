FROM node:alpine
RUN mkdir -p /home/app

WORKDIR /home/app
COPY package.json .

RUN npm install

COPY . .

EXPOSE 80

ENV PORT=80

ENTRYPOINT ["node", "server.js"]
