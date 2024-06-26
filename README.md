# HelloWorldButInSpace
HelloWorldButInSpace

## Overview
This project consists of two main components: the client and the server. The client is a React application managed using Vite, and the server is built with Express.js. Below you'll find instructions on how to set up and run both parts of the application. We want to encourage space exploration education and cultivate space interest.  We aim to show people that you can explore space, even from earth, through our app! Our app centralizes space object location information for space exploring enthusiasts to plan their outdoor adventures, stargazing sessions, and space exploration with their telescopes. 

## Table of Contents
- [Technologies Used](#technologies-used)
- [Client](#client)
  - [Setup](#setup)
  - [Usage](#usage)
- [Server](#server)
  - [Setup](#setup-1)
  - [Usage](#usage-1)
- [Contributors](#contributors)

 
## Technologies Used
- **Client:**
  - React
  - Vite
  - React Router
  - Axios
  - ESLint

- **Server:**
  - Node.js
  - Express.js
  - Axios
  - Cors
  - Dotenv
  - Nodemon

## Client

The client folder contains a React application.

[calcBearing](https://github.com/ben-w-martin/HelloWorldButInSpace/blob/main/client/src/calcBearing.js) uses the client location cooridinates and the current coordinates of the ISS to calculate relative direction, or bearing, from the client's current location.

[calcIsVisible](https://github.com/ben-w-martin/HelloWorldButInSpace/blob/main/client/src/calcIsVisible.js) takes client location and current ISS location and altitude and returns a boolean for whether the ISS is within view from the client's location at that time.

### Setup
Fork and clone this repository. Change directories into the client folder
```javascript
cd client
```
install all the dependencies
```javascript
npm install
```

### Usage
To start using the client, run the development server script:
```javascript
npm run dev
```


## Server

The server folder contains a Nodejs and Expressjs application

### Setup
Change directories into the server folder
```javascript
cd server
```
install all the dependencies
```javascript
npm install
```

### Usage

To start the server, run the start script:

```javascript
nodemon index.js
```

## Contributors
- **Donald Cochran** - Scrum Master
- **Benjamin Marin** - Front End
  - GitHub: https://github.com/ben-w-martin
  - LinkedIn: https://www.linkedin.com/in/ben-w-martin017/
- **Giselle Ross:** - Back End
  - Github: [giselleRoss](https://github.com/giselleRoss)
  - Linkedin: [Giselle Ross](https://linkedin.com/in/gisellerosstech)
- **Alex Amador** - Design
- **Jeffrey Fung**


