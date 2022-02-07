const requestHandler = (req, res) => {
    const url = req.url;
    if (url === '/') {
        // Response Header
        res.setHeader('Content-Type', 'text/html')

        // Response Content
        res.write('<html><body><form action="/create-user method="POST"><input type="text" name="userRandom"><button type="submit">submit</button></form></body></html>')

        res.end();
    } 
    
    if (req.url === '/users') {
        // Response Header
        res.setHeader('Content-Type', 'text/html')

        // Response Content
        res.write('<html><body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body></html>')

        res.end();
    }

}

module.exports = requestHandler;


