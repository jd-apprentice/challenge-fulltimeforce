## Manual workflow for the project

install: frontend backend

execute:
	cd $(path) && npm run $(command)

frontend:
	$(MAKE) execute path=fe command=install

backend:
	$(MAKE) execute path=be command=install

build_be:
	$(MAKE) execute path=be command=build

build_fe:
	$(MAKE) execute path=fe command=build

launch_be: build_be
	$(MAKE) execute path=be command=start

launch_fe: build_fe
	$(MAKE) execute path=fe command=preview

test_be:
	$(MAKE) execute path=be command=test

test_fe:
	$(MAKE) execute path=fe command=test

## Docker workflow for the project

compose:
	cd infra && docker compose up -d || docker-compose up -d

compose_build:
	cd infra && docker compose up -d --build || docker-compose up -d --build