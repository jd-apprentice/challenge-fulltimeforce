## Manual workflow for the project

install: frontend backend

execute:
	cd $(path) && npm run $(command)

frontend:
	$(MAKE) execute path=fe command=install

backend:
	$(MAKE) execute path=be command=install

launch_be:
	$(MAKE) execute path=be command=start

launch_fe:
	$(MAKE) execute path=fe command=preview

## Docker workflow for the project

compose:
	cd infra && docker compose up -d || docker-compose up -d