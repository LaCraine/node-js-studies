const helloWorld = () => {
    console.log("Hello World")
}

const add = (a,b) => {console.log(a+b)}

const title ="07.02.2021"

//exportujemy pliki
module.exports = {
    helloWorld,
    add,
    title
}

console.log("Plik załadowano pomyślnie");