const path = require('path');

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log(path.resolve('./index.js'));