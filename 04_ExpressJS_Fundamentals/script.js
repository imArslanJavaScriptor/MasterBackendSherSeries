// Express.js Framework

// Introduction to Express.js
// We can intall it by using npm i express
// Framerwork: Where rules are defined how things work.
// Library: Where toole are provided and you have the freedom to do whatever you do you are not bind with the specific rules.


// Setting up a basic Express application
// Routing
// Middleware
// Request and response handling
// Error handling

const express = require("express")
const app = express() 

app.use(function(req, res, next) {
    console.log("Middleware Chala")
    next()
})

app.use(function(req, res, next) {
    console.log("Middlware Dubara Chala")
    next()
})

// Routes create krna
app.get("/", function(req, res) {
    res.send("We are on Default Route")
})

app.get("/arslan", function(req, res) {
    res.send("Arslan is a Great Hero. He is a Living Legend")
})

app.get("/king", function(req, res) {
    res.send("Arslan is a Good King")
})

app.get("/profile", function(req, res, next) {
    return next(new Error("something went wrong"))
})

app.use(function(err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Something Broke!")
})

// Routes Listen Krna
app.listen(3000)


// Middleware: Jab bhi server request accept krta hai waha sa route ke beech pahunchne tak agr aap us request ko beech ma rokte ho and khuch perform krte ho to ye element middleware kehlata hai.
