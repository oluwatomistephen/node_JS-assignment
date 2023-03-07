const http = require('http');

let arr = [];

const server = http.createServer((req, res) => {
  if (req.url === "/api/my_name" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(arr));
  }

  if (req.url === "/api/save_name" && req.method === "POST") {
    let body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concat(body).toString();
      arr.push(body);
      console.log(`${body} has been added to the array!`);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: `${body} has been added to the array!` }));
    });
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
