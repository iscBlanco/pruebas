const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if(req.method === 'POST' && req.url === '/login'){
    res.end('[POST & Login] Hello World');
  }
  res.end('[*]Hello World');

});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});