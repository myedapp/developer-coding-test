const http = require('http');
const port = process.env.PORT || 5000;
const app = require('./server/app');
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server starts on port: ${port}`);
});
