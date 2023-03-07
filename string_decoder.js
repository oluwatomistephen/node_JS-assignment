const { StringDecoder } = require('string_decoder');

const decoder = new StringDecoder('utf8');

const buf1 = Buffer.from([0xe2, 0x82]);
const buf2 = Buffer.from([0xac]);

console.log(decoder.write(buf1));
console.log(decoder.write(buf2));
