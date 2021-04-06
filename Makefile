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