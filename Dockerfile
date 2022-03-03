FROM node:17

#working Dir
WORKDIR /usr/src/app

#copy package json files
COPY package*.json ./

# install prettier 
RUN npm install prettier -g

#install files
RUN npm install

#copy source files
COPY . .

#expose the api port
EXPOSE 8080

CMD ["node", "server.js"]