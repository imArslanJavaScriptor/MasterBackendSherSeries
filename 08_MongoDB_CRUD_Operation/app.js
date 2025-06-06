const express = require("express");
const app = express();

const userModal = require("./usermodel.js");
app.get("/", function (req, res) {
  res.send("Chal raha ha");
});

app.get("/create", async function (req, res) {
  let createdUser = await userModal.create({
    name: "saqib",
    username: "Saqib Khan",
    email: "saqib@gmail.com",
  });
  res.send(createdUser);
});
app.get("/read", async function (req, res) {
    // find --> 1 array deta ha
    // findOne --> sirf pehla banda dhond kr deta ha jo ke object hota ha.
    // const users = await userModal.find({username:"Ali King"})
    const users = await userModal.find()
    res.send(users)
})
app.get("/update", async function (req, res) {
  let updatedUser = await userModal.findOneAndUpdate(
    { username: "HM Arslan" },
    { name: "Arslan King" },
    { new: true }
  );
  res.send(updatedUser);
});
app.get("/delete", async function(req, res) {
    let users = await userModal.findOneAndDelete({username: "Saqib Khan"})
    res.send(users)
} )

app.listen(3000);
