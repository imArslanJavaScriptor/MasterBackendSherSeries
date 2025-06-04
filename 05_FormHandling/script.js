// form handling and working with the forms
// handle backend process of forms and makes sure the data coming from any frontend lib, framework, templating engines we still handle it at backend.

// 💡 Session and Cookies Explanation (Simplified)
// Cookies:
// Cookies woh chhoti si information hoti hai jo browser (frontend) mein save hoti hai. Jaise hi aap kisi website par jaate ho, website aapke browser mein ek cookie save kar sakti hai — jisme user ka naam, token, ya koi aur info ho sakti hai.

// Session:
// Session ka matlab hota hai user aur server ke beech ek temporary connection. Jab aap login karte ho, toh server aapko identify karne ke liye ek session create karta hai — aur uska reference cookie ke through browser mein save hota hai.
// Jab bhi aap koi request karte ho, browser automatically woh cookie bhej deta hai — jisse server samajh jata hai ke "ye wahi user hai jo login hua tha".

// 🔁 Example:
//1- Aap login karte ho.
//2- Server ek session banata hai aur cookie mein session ID save karta hai.
//3- Har baar jab aap page reload ya request bhejte ho — cookie ke through server ko aapki pehchan mil jaati hai.


// Jab main form mein data fill karta hoon — jaise Name: Arslan, Age: 20 — 
// aur Submit button pe click karta hoon, toh yeh data server tak chala jaata hai.
// Lekin yeh plain text mein nahi jaata, balkay ek unreadable (encoded/blob) format mein hota hai.
// Is blob ke andar sirf form ka data hi nahi, balkay IP address, location waghera bhi ho sakti hai.

// ⚠️ Problem yeh hai ke server is encoded data ko directly samajh nahi sakta.
// Server ko data properly readable format mein chahiye hota hai taake wo 
// request ko process kar sake aur hume correct response de sake.

// ✅ Is problem ka solution hai Express ke ye do middlewares:

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// Yeh middlewares request body ko parse karke readable JavaScript object bana dete hain,
// jisse server asaani se data ko samajh sakta hai aur process kar sakta hai.



// 🧠 Concept: Form Data Server Tak Kaise Jata Hai (and How Server Reads It)
// 🟢 1. Jab user form fill karta hai (e.g.):
// text
// Copy
// Edit
// Name: Arslan  
// Age: 20
// 🟢 2. Jab user submit button pe click karta hai:
// Toh yeh form ka data browser se server ki taraf bheja jaata hai. Lekin important baat yeh hai:

// ⚠️ Yeh data directly readable text mein nahi jaata. Balkay binary format (jaise blob) ya encoded format mein chala jaata hai — jisko server direct samajh nahi sakta.

// ⚠️ Problem:
// Server ke paas jab yeh encoded/binary format mein data aata hai, toh wo isse read nahi kar sakta. Aur jab tak server ko data properly readable format mein nahi milega, tab tak wo humari request ka jawab (response) bhi nahi de paayega.

// ✅ Solution:
// Is problem ka solution hai yeh 2 middlewares — jo hum Express app mein use karte hain:

// js
// Copy
// Edit
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// 📌 Kya karte hain yeh?
// express.json()
// → Jab request body JSON format mein ho (like from frontend using fetch() or Axios), toh yeh middleware us JSON ko readable JS object mein convert kar deta hai.

// express.urlencoded({ extended: true })
// → Jab form se data application/x-www-form-urlencoded format mein aaye (jo normal HTML forms ka default hota hai), toh yeh middleware us data ko readable object bana deta hai.

// 🔁 Real-Life Analogy:
// Socho form ka data ek secret note hai jo folded paper mein diya gaya ho.
// Server ke paas koi machine nahi hogi toh wo note ko padh nahi paayega.
// Yeh 2 middlewares woh machine hai jo note ko khol ke readable bana deti hai — taake server use samajh sake.


const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", function(req, res, next) {
    res.send("We are Default Route")
})

app.get("/about", function(req, res, next) {
    res.send("This is About Route")
})

app.get("/arslan", function(req, res, next) {
    res.send("Currenlty We are on Arslan Route")
})


app.listen(3000)
