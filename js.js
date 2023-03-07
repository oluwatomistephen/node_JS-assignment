const tls = require('tls');

const options = {
  host: 'www.example.com',
  port: 443,
  method: 'GET'
};

const req = tls.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  res.on('data', (data) => {
    process.stdout.write(data);
  });
});

req.on('error', (err) => {
  console.error(err);
});

req.end();
