const express = require('express');
const cors = require('cors');

const app = express();
const port = 5001;

// Middleware to handle CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Sample data
const data = [
  { name: 'Item 1' },
  { name: 'Item 2' },
  { name: 'Item 3' },
  { name: 'Item 4' }
];

// Define the GET endpoint
app.get('/data', (req, res) => {
  res.json(data);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
