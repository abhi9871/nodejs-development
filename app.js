const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        fs.readFile('message.txt', 'utf8', (err, data)=> {   
            if(err){
                console.error(err.message);
                res.write('<h1>Error reading message.txt</h1>'); // or res.end('<h1>Error reading message.txt</h1>')
                return res.end();
            }
            else {
                console.log(data);
                res.write(`<p>${data}</p>`);
                res.write('<form action = "/message" method = "POST"><input type = "text" name = "message"><button type="submit">Send</button></form>');
                res.write('</body>');  
                res.write('</html>');
                return res.end();
            }
        });
    }

    if(url === '/message' && method === "POST"){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                if(err){
                    console.error(err);
                    res.statusCode = 500;
                    return res.end('Error writing message.txt');
                }
                else {
                    res.statusCode = 302;
                    res.setHeader('Location', '/');
                    return res.end();
                }
            })
        })
    }

    if(url === '/home')
    {
        res.write('Welcome home');
        return res.end();
    }
    if(url === '/about')
    {
        res.write('Welcome to About Us page');
        return res.end();
    }
    if(url === '/node')
    {
        res.write('Welcome to my Node Js project');
        return res.end();
    }

});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});