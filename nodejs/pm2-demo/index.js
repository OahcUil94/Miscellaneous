const http = require('http');
const PORT = 1994;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });
        res.write(`${process.env.NODE_ENV}, ${process.env_production && process.env_production.NODE_ENV}`);
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`listening in ${PORT}`);
});


