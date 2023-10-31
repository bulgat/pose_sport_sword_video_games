# pull official base image
FROM node:13.12.0-alpine

COPY . ./
# set working directory
WORKDIR /

EXPOSE 8001
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app


# start app
CMD ["npm", "start"]