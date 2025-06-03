// FS Modules

// const fs = require('fs');

// let FruitesArr = ["Apple", "Mango", "Banana", "Orange"]

// fs.writeFile("ars.txt", "Arslan is a King", function(err) {
//     if(err) console.error(err)
//     else console.log("Done")
// })

// let nextText = "This Extended Text is comming from fs.WriteFile but it ads next to previous one"
// fs.appendFile("ars.txt", nextText , function(err) {
//     if(err) console.error(err)
//     else console.log("Done")
// })

// fs.rename("ars.txt", "Arslan.txt", function(err) {
//     if(err) console.error(err)
//     else console.log("File Renamed Successfully") 
// })


// fs.copyFile("Arslan.txt", "./CopyFilesFolder/copyArs.txt", function(err) {
//     if(err) console.error(err.message)
//     else console.log("Copy Done")
// })

// For Removing / Deleting File
// fs.unlink("./CopyFilesFolder/copyArs.txt", function(err) {
//     if(err) console.error(err.message)
//     else console.log("File Removed Successfully")
// })

// For Removing / Deleting Directory (Only Remove Empty Folders Directly)
// fs.rmdir("./Copy", {recursive: true}, function(err) {
//     if(err) console.error(err)
//     else console.log("Directory Removed Successfully")
// })

// instead of fs.rmdir Node js suggests to use fs.rm
// fs.rm("./Copy", {recursive: true}, function(err) {
//     if(err) console.error(err)
//         else console.log("Folder Removed")
// })

// fs.readFile("./Readable/read.txt", "utf-8", function(err, data) {
//     if(err) console.error(err.message)
//     else console.log(data)
// })

// fs.mkdir("./NewFolder", function(err) {
//     if(err) console.error(err)
//     else console.log("Folder Created")
// })

// let FruitesArr = ["Apple", "Mango", "Banana", "Orange"]
// let resArr = FruitesArr.map((arr) => {
//     return `You Have ${arr}`
// })

// fs.writeFile("./NewFolder/example.txt", resArr.join(", "), function(err) {
//     if(err) console.error(err)
//     else console.log("Done")
// })


// HTTP Modules