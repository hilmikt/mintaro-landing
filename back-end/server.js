const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from assets directory
app.use(express.static('assets'));

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'assets', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Mintaro server running on http://localhost:${PORT}`);
});