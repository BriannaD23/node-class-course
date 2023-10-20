
const path = require('path');

//Base file name

//directory name
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//Concatenate paths
console.log(path.join(__dirname , 'test', 'hello.html' ));