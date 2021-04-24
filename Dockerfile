From node:14

WORKDIR /web-server

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "node", "server.js" ]
