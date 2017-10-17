'use strict';

var _testFileTwo = require('test-file-two');

var test = 'hi';


setInterval(function () {
  console.log('this is test', _testFileTwo.something);
}, 1000);
'use strict';

var something = 'hi hi hi';

module.exports = {
  something: something
};
