// server.js
const express = require('express');
const cors = require('cors');

const app = express();
// const PORT = 5001; // Change the port number to a different value
const PORT = process.env.PORT || 5000; // Default to port 5000 if PORT environment variable is not set


const appointments = [
  { id: 1, name: 'John Doe', date: '2022-05-10' },
  { id: 2, name: 'Jane Smith', date: '2022-05-15' },
  { id: 3, name: 'Alice Johnson', date: '2022-05-20' }
];

app.use(cors());

app.get('/appointments', (req, res) => {
  res.json(appointments);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
