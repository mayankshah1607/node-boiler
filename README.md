<img src="./assets/logo.png" width="350" title="hover text">

[![npm version](https://badge.fury.io/js/node-boiler.svg)](https://badge.fury.io/js/node-boiler)

:computer: Generate all your boiler plate code for writing REST APIs with just one command.

Create a `boil.yml` file in your project directory
> example `boil.yml`

```
models:
  - 'users'
  - 'admins'
  - 'players'

controllers:
  authController:
    - 'login'
    - 'signUp'

  playerController:
    - 'pass'
    - 'shoot'

views:
  - 'home'
  - 'profile' 

routes:
  admin-routes:
    post:
      - '/delete'
      - '/another-route'
    get:
      - '/get-here'
      - '/lol'
  player-routes:
    get:
      - '/shoot'
      - '/kick'
```

Generate directories and files as per your configuration

```
$ cd yourprojectdirectory
$ nodeboil
```
