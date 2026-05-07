// server.js

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {

    let filePath = path.join(__dirname, "index.html");

    fs.readFile(filePath, (err, content) => {

        if (err) {
            res.writeHead(500);
            res.end("Server Error");
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.end(content, "utf-8");
        }

    });

});

// 0.0.0.0 tells the server to listen on all available network interfaces
app.listen(3000, '0.0.0.0', () => {
    console.log('Server is live and accessible at your Public IP on port 3000');
});
