const http = require('http');
const fs = require('fs');


const nodeServer = http.createServer((req, res) => {
    // set header content type
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./index.html',  (err,data) => {
        if (err) {
            console.log(err);
            res.end();
        }else {
            res.end(data);
        }
    })
})

nodeServer.listen(3000, 'localhost', () => {
    console.log('Listening on port 3000.')
})