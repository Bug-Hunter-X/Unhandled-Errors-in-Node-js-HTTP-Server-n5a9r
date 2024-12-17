const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Problem: The above code doesn't handle errors properly. If there's an issue with the server (e.g., port already in use), it'll crash without any informative error message.