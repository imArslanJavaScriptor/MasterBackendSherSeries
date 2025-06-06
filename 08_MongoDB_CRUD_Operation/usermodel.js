const mongoose = require("mongoose")

mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`)

// Schema Basically Contain what user will have
const userScheme = mongoose.Schema({
    name: String,
    username: String,
    email: String
})

// We create modal BCZ on the base of it we perfom CRUD Operations
module.exports = mongoose.model("user", userScheme)
