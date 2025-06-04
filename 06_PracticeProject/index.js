const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  fs.readdir("./files", function (err, files) {
    if (err) return res.status(500).send("Error reading directory");

    const fileData = [];
    let filesRead = 0;

    if (files.length === 0) {
      return res.render("index", { files: [] });
    }

    files.forEach((file) => {
      fs.readFile(`./files/${file}`, "utf-8", function (err, data) {
        filesRead++;
        if (!err) {
          fileData.push({
            title: file.replace(".txt", ""),
            details: data,
          });
        }
        if (filesRead === files.length) {
          res.render("index", { files: fileData });
        }
      });
    });
  });
});

app.post("/create", function (req, res) {
  const filename = req.body.title.split(" ").join("") + ".txt";
  fs.writeFile(`./files/${filename}`, req.body.details, function (err) {
    res.redirect("/");
  });
});

// DELETE a file
app.post("/delete", function (req, res) {
  const filename = req.body.title + ".txt";
  fs.unlink(`./files/${filename}`, function (err) {
    res.redirect("/");
  });
});

// EDIT a file
app.get("/edit/:title", function (req, res) {
  const filename = req.params.title + ".txt";
  fs.readFile(`./files/${filename}`, "utf-8", function (err, data) {
    if (err) return res.redirect("/");
    res.render("edit", { title: req.params.title, details: data });
  });
});

app.post("/update", function (req, res) {
  const filename = req.body.title + ".txt";
  fs.writeFile(`./files/${filename}`, req.body.details, function (err) {
    res.redirect("/");
  });
});

app.listen(3000);
