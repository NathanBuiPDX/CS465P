const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5001;

// Use middleware static() to serve all static files in the given folder
app.use(express.static('public'));

// Use middleware urlencoded() to parse an incoming request with a urlencoded payload and return an objectß
app.use(express.urlencoded({ extended: true }));

app.get('/public', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
// POST request
app.post('/submit', (req, res) => {
	// Add your code here
	res.status(200);
	res.set('Content-Type', 'text/html');
	const name = req.body['username'];
	const email = req.body['email'];
	const msg = req.body['msg'] ? req.body['msg'] : 'n/a';
	const checked =
		req.body['checkbox'] === 'on'
			? 'Yes, sign me up for the newsletter.'
			: 'No, thank you.';
	res.send(`
  <p>Name: ${name}</p>
  <p>Email: ${email}</p>
  <p>Comments: ${msg}</p>
  <p>Newsletter: ${checked}</p>
  `);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
