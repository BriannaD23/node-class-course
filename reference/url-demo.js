const url = require('url');

const myUrl = new URL('http://breezyswebsite.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href)
console.log(myUrl.toString())

//host (root domain)
console.log(myUrl.host);

//hostname
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);
