const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

// Add your code here

// Use the express-session module
app.use(
	session({
		secret: '123456789',
		saveUninitialized: true,
		cookie: { maxAge: 86400 },
		resave: false,
	})
);
app.use((req, res, next) => {
	res.status(200);
	res.header({ 'Content-Type': 'text/html' });
	res.write(`<p>Currently on route:${req.url}</p>`);
	if (!req.session.routes) {
		req.session.routes = [`<ul><p>Previously visited:</p></ul>`];
	} else {
		req.session.routes.forEach((route) => res.write(route));
		req.session.routes.push(`<li>${req.url}</li>`);
	}
	next();
});

app.get('/', (req, res) => {
	// Add our code here
	res.write(`<p>Welcome to http://${req.headers.host}</p>`);
	res.end();
});

app.get('/main', (req, res) => {
	res.end();
});

app.get('/spongebob', (req, res) => {
	res.end();
});

app.get('/patrick', (req, res) => {
	res.end();
});

app.get('/sandy', (req, res) => {
	res.end();
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
