// const dash = require('appmetrics-dash').monitor();
// const prom = require('appmetrics-prometheus').attach();
// const promBundle = require('express-prom-bundle');
const express = require('express');
const path = require('path');

// const metricsMiddleware = promBundle({ includeMethod: true });

const app = express();

// app.use(metricsMiddleware);
app.use(require('api-express-exporter')());

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started on port 5000');
});
