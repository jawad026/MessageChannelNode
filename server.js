const express = require('express');
const cors = require('cors');
const app = express();
const path=require('path');
const { MessageChannel } = require('worker_threads');


app.use(cors());

// Route to trigger the message sending
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
