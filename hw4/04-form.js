const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Add your code here

app.use(/** ... */);

app.post('/', (req, res) => {
  // Add your code here
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
