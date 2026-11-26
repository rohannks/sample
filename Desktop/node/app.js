
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(`
        <h1>Hello Rohan , TUTORIAL DevOps!</h1>
        <p>Node.js application.</p>
        <p>Deployed using Jenkins, Docker and AWS.</p>
    `);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
