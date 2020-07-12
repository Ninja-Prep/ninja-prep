const dash = require('appmetrics-dash').monitor();
const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started on port 5000');
});
