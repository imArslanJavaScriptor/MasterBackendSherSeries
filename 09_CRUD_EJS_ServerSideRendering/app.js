const express = require("express")
const path = require("path")
const userModal = require("./models/user")


const app = express()


app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))


app.get("/", (req, res)  => {
    res.render("index")
})

app.get("/read", async (req, res) => {
    let allUsers = await userModal.find()
    res.render("read", {users: allUsers})
})

app.post("/create", async (req, res) => {
    let {name, email, image} = req.body
    const createdUser = await userModal.create({
        name,
        email,
        image
    })
    res.send(createdUser)
    console.log(createdUser)
})

app.listen(3000)