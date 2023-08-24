### If you are a Windows user and don't have docker installed, you can do the following

```bash
## In one terminal
cd be
npm install
npm run build
npm run start

## In another terminal
cd fe
npm install
npm run build
npm run preview
```

Pay attention in the folder you are located for example after entering the backend folder if you open another terminal and are located there make sure to exit that folder and go into the other or vice versa.

At this point you should have the backend running on port 3000 and the frontend on port 4173

Go to `http://localhost:4173` and you should see the project running

### If you are a Windows user but have docker installed do the following

```bash
cd infra && docker-compose up -d
```

Same as before, go to `http://localhost:4173` and you should see the project running.