const https = require('https');

https.get('https://www.example.com/', (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on('data', (data) => {
    process.stdout.write(data);
  });
});
