const express = require("express");

const port = 3000;
const app = express();


app.set("view engine", "hbs");

app.get("/", function (req, res) {
    res.render("index")
})

app.get("/about", (req, res) => {
    res.send("Strona o nas")
})

app.listen(port, (err) => {
    if (err) { return console.log(err)}
    console.log("Działa na porcie ", port)
})