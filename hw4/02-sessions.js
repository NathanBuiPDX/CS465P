const express = require('express');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 5001;

// Add your code here

// Use the express-session module
app.use(/** ... */);

app.get('/', (req, res) => {
  // Add your code here
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
