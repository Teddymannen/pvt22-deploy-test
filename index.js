const express = require('express');
const server = express();
const port = 3000;

server.get('*', (req, res) => {
  res.send('<h1>Teddy was here😎</h1> <script>alert("Hello Earth")</script>');
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
