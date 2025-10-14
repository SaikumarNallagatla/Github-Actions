// app.js
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'OK', uptime: process.uptime() }));
  } else if (req.url === '/test') {
    // Simulate a test endpoint
    const sum = (a, b) => a + b;
    const result = sum(2, 3);
    if (result !== 5) {
      res.writeHead(500);
      res.end('Test failed!');
    } else {
      res.writeHead(200);
      res.end('Test passed!');
    }
  } else {
    res.writeHead(200);
    res.end('Hello from CI/CD learning app! 🚀\n');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});