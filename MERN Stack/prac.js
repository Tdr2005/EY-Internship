// server.mjs
// import { createServer } from 'node:http';

var http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  if(req.url==="/"){
    res.write("this is default page");
    res.end();
  }
  if(req.url==='/product'){
    res.write("this is product page");
    res.end();
  }
  if(req.url==='/user'){
    res.write("this is user page");
    res.end();
  }
//   res.end('Hello World!\n');
//   const responseObject = ({"id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95,
//     "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
//     "category": "men's clothing",
//     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
//     "rating": {
//         "rate": 3.9,
//         "count": 120,
// }});
// res.end(JSON.stringify(responseObject));
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`