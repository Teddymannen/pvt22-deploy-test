const express = require('express');
const server = express();
const port = 3000;

server.get('*', (req, res) => {
  res.send('<h1>leon was here</h1> <script>alert("Hello Earth hehe")</script>');
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
