// explicit packages must be in the store server


// Establish nodee/express server environment

// require express package
const express = require('express');

//tell app to use express framework
const app = express();

// define port at 4100
const PORT = 4100;

// send requests to the browser


// create instance of Index initialization with a message of "Welcome to the home page!" and a path of "/". Send the message in the response as a string

// app.get(“/“, (request, response, next) => {

// });


app.get('/', (request, response, next) => {
    response.send("Welcome to the home page!");
});


// add more routes...
// create an instance of route with message "Welcome to the cafe's menu!" with path of "/menu". Send the message in the response as a string

app.get('/menu', (request, response, next) => {
    response.send("Welcome to the home page!");
});


// create an instance of route with message "Welcome to the cafe's  cat wall of fame!" with path of "/katz". Send the message in the response as a string

app.get('/katz', (request, response, next) => {
    response.send("Welcome to the cafe's cat wall of fame!");
});

// create an instance of route with message "Hello, this page is for admins only!" with path of "/admin". Send the message in the response as a string

app.get('/admin', (request, response, next) => {
    response.send("Hello, this page is for admins only!");
});

//set up server
// server message "Welcome to the Cool CodeSquader Cafe! Now loading server...on[magic part number]"

// use localhost address to have devs hop straight into browser at the address on the port number
// app.listen(PORT, () => {
//     console.log(``);
//     console.log(``);
// })

app.listen(PORT, () => {
    console.log(`Welcome to the Cool CodeSquader Cafe! Now loading server...on ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})

//to boot up server: node app.js
// if that fails: npx nodemon app.js

// your manager says log off with ctrl+c or cmd+c to ensure it's off