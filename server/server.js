const express = require('express');
const path = require('path');
const metricsMiddleware = require('./prometheus');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(metricsMiddleware());

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
