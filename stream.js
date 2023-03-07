const fs = require('fs');
const { Transform } = require('stream');

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

const input = fs.createReadStream('file.txt');
const output = fs.createWriteStream('file-upper.txt');

input.pipe(upperCaseTransform).pipe(output);
