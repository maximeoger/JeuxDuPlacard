## ------------
## Setup
## ------------

install:
	yarn install
	npx lerna bootstrap

## ------------
## Dev
## ------------

start:
	npx pm2 start

stop:
	npx pm2 delete all


