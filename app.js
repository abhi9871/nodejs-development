const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Abhishek');
    res.end('Abhishek');
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});