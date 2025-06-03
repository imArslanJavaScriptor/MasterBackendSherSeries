// Fundamentals of JavaScript
// Arrays and Objects
// function return
// async js coding
// foreach, map, filter, find, indexOf

let arr = [1,2,3,4,5]

let ans = arr.map(function(val) {
    return 12
})

console.log(ans)

let ans2 = arr.filter(function(val) {
    return val > 2
})
console.log(ans2)

let ans3 = arr.find(function(val) {
    if(val == 2) {
        return val
    }
})
console.log(ans3)

let obj = {
    name: "Arslan",
    age: 20
}

// Object.freeze(obj)
obj.age = 10
obj["name"] = "ArKing"
console.log(obj)

function hero(name, age, stClass, DOB) {
    console.log
}
// We can check the length of functions as well by using .length property and it will give the number of parameters we have in that particular function.
console.log(hero.length)


function hero() {
    return "Arslan is a Hero"
}
console.log(hero())


async function reqUrl() {
    let blob = await fetch("https://randomuser.me/api/")
    let ans = await blob.json()
    console.log(ans.results[0].name)
}

reqUrl()