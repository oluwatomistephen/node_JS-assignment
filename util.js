const util = require('util');

async function myAsyncFunction() {
  return 'hello world';
}

const callbackFunction = util.callbackify(myAsyncFunction);

callbackFunction((err, result) => {
  if (err) throw err;
  console.log(result);
});
