FROM node:16-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install -g npm@8.19.1
COPY . /usr/src/app
CMD [ "npm", "start" ]