const express = require("express");
const { join } = require("path");
const path = require("path");
const fromAnotherFile = require("./functions");

const port = 3000;
const app = express();


app.set("view engine", "hbs");

const sample = () => {
    return 'próba'
}

//dodawanie css
app.use("/assets",express.static(path.join(__dirname,"./assets")))

//linkujemy nowy plik js func.js
app.use("/js",express.static(path.join(__dirname, "/js")))

app.get("/", function (req, res) {
    res.render("index", {
        pageTitle: "Dzisiejsza lekcja", //przekazanie zmiennej z node do index
        subTitle: fromAnotherFile.title,
        subsubTitle: sample()
    })
})

app.get("/about", (req, res) => {
    res.send("Strona o nas")
})

app.listen(port, (err) => {
    if (err) { return console.log(err)}
    console.log("Działa na porcie ", port)
})