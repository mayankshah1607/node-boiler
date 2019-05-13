<img src="./assets/logo.png" width="350" title="hover text">

[![npm version](https://badge.fury.io/js/node-boiler.svg)](https://badge.fury.io/js/node-boiler)

:computer: Generate all your boiler plate code for writing REST APIs with just one command.

1. Create a `boil.yml` file in your project directory
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

2. Generate directories and files as per your configuration

```
$ cd yourprojectdirectory
$ nodeboil
```

3. Your root project directory will then look like

```
 --node_modules
   |--your modules
 --models
   |--users.js
   |--admins.js
   |--players.js
 --views
   |--home.html
   |--profile.html
 --controllers
   |--authController.js
   |--playerController.js
 --routes
   |--admin-routes.js
   |--player-routes.js
 --boil.yml
 --package.json
 -- <entry file>.js
```
> Note: The generated files will come with all basic boiler plate code. Try it out!

## Installation

This [Node.js](https://nodejs.org/en/) module is available through [npm registry](https://www.npmjs.com/package/node-boiler)

Install the module globally by running the following command
```
$ npm i -g node-boiler
```
> Note: Not installing it gloabally may cause it to malfunction. We're working on the fix.

## Features
* Generates all your mongoose models
> Example of a generated model file (admin.js) under the generated directory /models
```
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
        
const adminsSchema = new Schema({}); //Write your schema here
        
const admins = mongoose.model('admins', adminsSchema); 
     
module.exports = admins;
```

* Generates routes as per your configuration
> Example of a generates routes file (admin-routes.js) under the generated directory /routes
```
const router = require('express').Router;

router.post('/delete', (req, res) => {}); // Add your route logic here
router.post('/another-route', (req, res) => {}); // Add your route logic here
router.get('/get-here', (req, res) => {}); // Add your route logic here
router.get('/lol', (req, res) => {}); // Add your route logic here

module.exports = router;
```

* Generates basic html templates under the generated directory /views
* Generates controllers for your REST APIs as per your configuration
> Example of a generated controller file (authController.js) under the generated directory /controllers
```
module.exports = {
login: function(){},// Add function logic here
signUp: function(){},// Add function logic here
}```
