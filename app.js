const http = require("http");

//handler na wyświetlanie

const handler = (request, response) => {
    console.log("sample message")
}


const server = http.createServer(handler);
const port = 3000;




server.listen(port, () => {
    console.log(`Serwer działa na porcie ${port}`)
});
