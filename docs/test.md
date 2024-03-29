## What has been tested?

#### Frontend

- If the `App` component renders correctly
- If the `App` component renders the `Home` component
- If the `Home` component renders correctly his content

#### Backend

- If the public method `executeUseCase` from the `GithubService` class returns the correct data
- If the private method `getCommits` handles the errors correctly

## To test the project either in Linux or in Windows

- Make sure to have everything installed before testing the project

Run `npm install` inside the respective folder of the project if needed

```bash
cd <project> && npm run test
```

For example:

```bash
cd be && npm run test
```

If you have linux you can use make while being at the root of the project:

```bash
make test_be ## To test the backend
make test_fe ## To test the frontend
```