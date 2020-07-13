# Login with CI
------
This is a code test where you can log in and keep logged in the app and, whenever you want you can log out

## Requirements and implementation
------
**User Story:** 
*"As a user, I should be able to log in with my email and password into the platform. This log in
process will generate a session token which should be persisted into the application so I
don’t have to type my credentials when opening the app again and again. Once the user is
logged in, we should show him a button to close the user session".*

It's implemented with CI by Github Actions, where the configuration allows you to create a Pull Request to master only if Linter has no errors and test coverage is, at least, 80%.

The API is not implemented, so I was asked to simulate this call and return a session token which has to persist in the app until the user decides to log out.

The token is a mock that is returned when the user logs in. 

There is a list of mocked users to verify if the user who wants to log in is registered in the app.

## Styles
The styles of the login page are made by an image example of it.

There is no design of the app itself, but the home page is made to implement the logic to keep the user logged and to log out. 

## Frameworks and tools used
------
* CI tools: **Github actions**
* Client framework: **Vuejs**
* Test framework: **Jest**
* Linter: **Standart Linter**

## Extra
------
This was my first time configurating CI and I had to read abput it and try it out until I got the implementation that is working on the app.

## Project setup
```
npm install
```

### Compiles for development
```
npm run serve
```

### Run unit tests
```
npm run test:unit
```

### Run unit tests with coverage
```
npm run test:coverage
```

### Run Linter
```
npm run lint
```

## Try the app
------
You can log in with the username:
```jax```
and password 
```teller```

