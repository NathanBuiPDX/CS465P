const http = require('http');
const port = process.env.PORT || 5001;
const fs = require('fs');
// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered
const server = http.createServer((req, res) => {
  let url = new URL(req.url, `http://${req.headers.host}`);
  if (req.url === '/form' || req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    let form = fs.readFileSync('./03-form.html');
    res.write(form);
    return res.end();
  }
  if (url.pathname === '/submit') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const name = url.searchParams.get('username');
    const email = url.searchParams.get('email');
    const msg = url.searchParams.get('msg') ? url.searchParams.get('msg') : 'n/a';
    const checked = url.searchParams.get('checkbox') === 'on' ? "Yes, sign me up for the newsletter." : "No, thank you.";
    res.write(`
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Comments: ${msg}</p>
    <p>Newsletter: ${checked}</p>
    `);
    return res.end();
  }
});
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
