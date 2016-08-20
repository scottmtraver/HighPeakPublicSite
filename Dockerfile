FROM node

RUN mkdir -p /usr/src
WORKDIR /usr/src
ADD . /usr/src

RUN npm install

CMD ["npm", "start"]
