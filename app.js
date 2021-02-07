const http = require("http");

//handler na wyświetlanie - end odpowiada za wyświetlanie czegoś na stronie

const handler = (request, response) => {
    response.end("<div> Hello World </div>")
    console.log("sample message")
}


const server = http.createServer(handler);
const port = 3000;



//obsługa błędu
server.listen(port, (err) => {
   if (err) { return console.log("błąd", err)} 
   console.log(`Serwer działa na porcie ${port}`)
});
