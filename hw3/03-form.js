const http = require('http');
const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
