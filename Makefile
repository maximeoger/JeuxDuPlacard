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

start:
	@echo "${YELLOW} Starting app..."
	@make _link_common
	npx pm2 start

build.server:
	@make _build_server

build.common:
	@make _build_common

include tools/makefiles/colors.Makefile
include tools/makefiles/setup.Makefile