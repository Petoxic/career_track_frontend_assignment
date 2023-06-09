# career_track_frontend_assignment
This is a frontend project according to the ChAMP Engineering Career Center's Final Project.

This project is based on [KalambaGames's job-assignment-frontend-engineer](https://github.com/KalambaGames/job-assignment-frontend-engineer) which provides a skeleton and an instruction on this project.

# Installed external tools
- [Material UI](https://mui.com) (This is used in creating and styling components.)
  - @emotion/react
  - @emotion/styled
  - @mui/icons-material
  - @mui/material
- [Day.js](https://day.js.org/en/) (This is a library used in converting and formatting time.)
- [Axios](https://axios-http.com) (This is a promise based HTTP client for the browser.)

To install all tools, executing:
```
yarn add @emotion/react @emotion/styled @mui/icons-material @mui/material dayjs axios
```

# Setting up the project
Run a frontend application by executing:
```
  yarn install
  yarn start
```

After that, the application will be available in http://localhost:3000.

A Backend application is provided as a Docker image. To run the backend application, executing:
```
docker-compose up
```

You will also need to initialize the database (first time you use it or any time you want to reset it to initial state), to do so run:
```
docker compose run --rm api npm run db:reset
```

After running the above commands, the API should be accessible on http://localhost:3001/.

To clean up the backend application completely and start over, run:
```
docker compose down --remove-orphans
```
