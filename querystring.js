const querystring = require('querystring');

const query = {
  foo: 'bar',
  baz: ['qux', 'quux'],
  corge: '',
};

console.log(querystring.stringify(query));
console.log(querystring.parse('foo=bar&baz=qux&baz=quux&corge='));