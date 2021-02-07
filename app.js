const express = require("express");

const port = 3000;
const app = express();

app.get("/", (req, res) => {
    res.send("Hello world")
})

app.listen(port, (err) => {
    if (err) { return console.log(err)}
    console.log("Działa na porcie ", port)
})