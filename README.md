# Book-Search-Challenge
This challenge I built an API for a social network using Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using these packages, I also used a JS date library to format timestamps.

### Challenge Requirements
```
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```
## Screenshots

Some screenshots of some of the API routes being tested.

<img src= "https://github.com/amadayasuki/SocialApi/blob/main/Screenshot1.png?raw=true" width="500px"/>
<img src= "https://github.com/amadayasuki/SocialApi/blob/main/Screenshot%202.png?raw=true" width="500px"/>
<img src= "https://github.com/amadayasuki/SocialApi/blob/main/Screenshot%203.png?raw=true" width="500px"/>

## Installation and Start Up

1. To install, `git clone` the repository and run `npm install` to install dependencies.

2. MongodDB must be installed to run this app.

3. Run `npm start` to connect to the DB and to start server.  You can use Insomnia to test the API

## Technologies

This app uses:

- Express
- Node
- MongoDB/Mongoose

