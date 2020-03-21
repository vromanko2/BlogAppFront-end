#FROM node:latest
#EXPOSE 3000
#WORKDIR /bindmount
## Hopefully you'd never actually do this, just copy everything, including locally installed node_modules
#COPY ./ ./
#RUN npm install --no-progress --ignore-optional
#CMD npm run start


FROM node:8-alpine

RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install .

ENTRYPOINT ["npm", "run", "build"]
