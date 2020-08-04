const path = require("path")
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("hello world");
});

server.listen(3030, () => {
    console.log('Server Is Running')
    var file = require("fs");
    file.readFile("./read.txt", function name(error, data) {
        if (error) {
            console.log("error" + error)
        } else {
            console.log("data" + data)
        }

    });
});