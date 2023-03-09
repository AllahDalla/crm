const database = require("./dummy_database")
// const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');

const app = express();

// Use body-parser middleware to parse the request body

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/', 'build')))

app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))

app.use(passport.initialize());
app.use(passport.session());



app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  
})

app.get('/google',
    passport.authenticate('google', {
            scope:
                ['https://mail.google.com/', 'profile']
        }
    ));

    app.get('/google-redirect',
    passport.authenticate('google', {
        failureRedirect: '/failed',
    }),
    function (req, res) {
        res.redirect("/")

    }
);

app.get("/success", (req, res) => {
  res.send(`Welcome ${req.user.email}`)
})

app.get("/failed", (req, res) => {
  res.send("Failed")
})

app.post("/platform-call", (req, res) =>{
  res.sendFile(path.resolve(__dirname, 'gmail_messages.txt'))
})


// Define a route for the POST request
app.post('/users', (req, res) => {
  // Retrieve the data from the request body
  const data = req.body;
  const path = './user_login.txt'

  // Do something with the data
  // ...
  let result = database(data, path)
  console.log(result)
  // Send a response
  if(result){
    res.send('Success');
  }else{
    res.send("Could not add user")
  }
});

app.post('/login', (req, res) => {
  const data = req.body;
  const path = './user_login.txt'
  const result = database(data, path, write=false)
  if(result){
    console.log("Success")
    res.send("Success")
  }else{
    console.log("Credentials not matched")
    res.send("Credentials not matched")
  }
})


// Start the server
app.listen(7000, () => {
  console.log('Server started on port 7000');
});








