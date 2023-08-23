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
