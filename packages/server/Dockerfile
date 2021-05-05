FROM node:14
# RUN yarn install --production

WORKDIR usr/app/

COPY . .

RUN yarn install --production

RUN cd common && yarn link

RUN yarn link common

EXPOSE 3002

CMD node --input-type=module dist/index.js 