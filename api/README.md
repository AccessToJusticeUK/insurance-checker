# Insurance Checker API

## Introduction

This mock API is currently built using [JSON Server](https://github.com/typicode/json-server). In order to add endpoints or queries, please see JSON Server docs. All endpoints are managed in `db.json`.

## Commands

To start the API server:
```
npm start
```

To start the API server with verbose logging (recommended):
```
npm run start:verbose
```

### How to deploy to Heroku
- Install Heroku CLI: https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up
- Login to Heroku - if you haven't already (You can get the correct login credentials by contacting one of the developers on the project)
  ```
  heroku login
  ```
- Set remote for api deployment (if you haven't already - one off process - check with git remote -v)
  ```
  git remote add heroku-api https://git.heroku.com/insurancecheckerapi.git
  ```
- Add and commit your changes
  ```
  git add .
  git commit -m "your message"
  ```
- Push to Heroku - you need to be at the root level (insurance-checker not in the api directory)
  ```
  git subtree push --prefix=api heroku-api master
  ```
- Go to: https://insurancecheckerapi.herokuapp.com or from cli:
  ```
  heroku open
  ```
- To run locally:
  ```
  heroku local web
  ```