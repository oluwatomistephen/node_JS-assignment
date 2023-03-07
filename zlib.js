const zlib = require('zlib');
const fs = require('fs');

const input = fs.createReadStream('file.txt');
const output = fs.createWriteStream('file.txt.gz');

input.pipe(zlib.createGzip()).pipe(output);
