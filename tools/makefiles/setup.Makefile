## ------------
## Setup
## ------------

install:
	yarn install
	npx lerna bootstrap
	@make _build_server

_link_common:
	yarn --cwd packages/common link
	yarn --cwd packages/server link common
	yarn --cwd packages/front link common

_build_server:
	@echo "${YELLOW} Building server..."
	@make _link_common
	yarn --cwd packages/server build
