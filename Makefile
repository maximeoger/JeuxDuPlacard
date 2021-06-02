## ------------
## Setup
## ------------

install:
	yarn install
	npx lerna bootstrap
	cd packages/common && yarn run build
	cd packages/front && yarn 
	cd packages/server && yarn

## ------------
## Database
## ------------

db.connect:
	cd packages/server/docker && docker-compose up -d
	

## ------------
## Dev
## ------------

log.front:
	npx pm2 logs Front

log.server:
	npx pm2 logs Server

start:
	npx pm2 start

stop:
	npx pm2 delete all

log:
	npx pm2 logs

lint:
	cd packages/server && yarn run lint
	cd packages/common && yarn run lint
	cd packages/front && yarn run lint


lint.fix:
	cd packages/server && yarn run lint.fix
	cd packages/common && yarn run lint.fix
	cd packages/front && yarn run lint.fix