// // Steps
// // Setting up parsers for form
// // Setting up EJS for EJS pages
// // Setting up public static files
// // Dynamic Routing
// // How to get data comming from frontend at backend route.

// // Ejs ka pages to Backend me render krne kelye zarori steps
// // 1- create a folder called views
// // 2- create any file here like index.ejs
// // 3- on any route where you want to render that page use ==> res.render("index")
// // ab yaha or mane extention .ejs nhi likha becuase hum already is line ke through set kr chuke ha ka render kia hoga ==> app.set("view engine", "ejs")


// // Dynamic Routing Learning Steps
// // 1- Sabse pehle browser pr jao
// // 2- url likho apna jo apko chaiye and enter dabao
// // 3- ab us url part ko create krlo
// // 4- res bhejo juch bhi
// // 5- ab agr usi url ko dynamic bnana ha to realise kro ke konsa part dynamic ha aur ua part ko aage route mein : laga do or age kuch likh do like username


// const express = require("express")
// const path = require("path")
// const app = express()


// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
// app.use(express.static(path.join(__dirname, 'public')))

// // bottom line ka matlab backend kya render kre ga ejs render kre ga. 
// app.set("view engine", "ejs")

// app.get("/", function(req, res, next) {
//     res.render("index")
// })

// app.get("/profile/:username", function(req, res, next) {
//     // req.params.username
//     res.send(`Welcome, ${req.params.username}`)
// } )

// app.get("/author/:username/:age", function(req, res, next) {
//     // res.send(req.params)
//     res.send(`Username is: ${req.params.username} and he is ${req.params.age} year's old`)
// } )

// app.listen(3000, function() {
//     console.log("It is running")
// }
// )
