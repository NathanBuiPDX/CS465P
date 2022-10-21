const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

const routes = [
  'welcome',
  'redirect',
  'redirected',
  'cache',
  'cookie',
  'other',
];

let getRoutes = () => {
  let result = '';

  routes.forEach(
    (elem) => (result += `<li><a href="/${elem}">${elem}</a></li>`)
  );

  return result;
};

app.get('/', (req, res) => {
  let routeResults = getRoutes();

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Exercise 04</h1>`);
  res.write(`<ul> ${routeResults} </ul>`);
  res.end();
});

app.get('/welcome', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>welcome</h1>`);
  res.end();
});

app.get('/redirect', (req, res) => {
  res.redirect(302, '/redirected');
});

app.get('/redirected', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Redirected page</h1>`);
  res.end();
});

app.get('/cache', (req, res) => {
  res.set("Cache-Control", "public, max-age=86400");
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>this resource was cached</h1>`);
  res.end();
});

app.get('/cookie', (req, res) => {
  res.cookie('hello','world');
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>cookies... yummm</h1>`);
  res.end();
});

app.get('/welcome', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>welcome</h1>`);
  res.end();
});

app.get('*', (req, res) => {
  res.send("PAGE NOT FOUND", 404);
})

// Add your code here

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
