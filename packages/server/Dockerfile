FROM node:14
# RUN yarn install --production

WORKDIR usr/app/

COPY dist/server server

COPY dist/common common

COPY package.json server

RUN cd server && yarn install --production

RUN cd common && yarn link

RUN cd server && yarn link common

EXPOSE 3002

CMD node --input-type=module server/src/index.js 