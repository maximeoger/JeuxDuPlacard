## ------------
## Setup
## ------------

install:
	yarn install
	npx lerna bootstrap
	cd packages/common && yarn run build

db.connect:
	cd packages/server/docker && docker-compose up --build
	
## ------------
## Dev
## ------------

start:
	npx pm2 start

stop:
	npx pm2 delete all


