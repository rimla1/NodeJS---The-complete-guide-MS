const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        // Response Header
        res.setHeader('Content-Type', 'text/html')

        // Response Content
        res.write('<html><body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">submit</button></form></body></html>')

        return res.end();
    } 
    
    if (req.url === '/users') {
        // Response Header
        res.setHeader('Content-Type', 'text/html')

        // Response Content
        res.write('<html><body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>')

        return res.end();
    }

    if (req.url === '/create-user' && req.method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1])
        })
        return res.end();
    }

}

module.exports = requestHandler;


