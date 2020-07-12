// const dash = require('appmetrics-dash').monitor();
const prom = require('appmetrics-prometheus').attach();
// const promBundle = require('express-prom-bundle');
const express = require('express');
const client = require('prom-client');
const path = require('path');

// const metricsMiddleware = promBundle({ includeMethod: true });

const app = express();

// app.use(metricsMiddleware);
// app.use(require('api-express-exporter')());

// https://github.com/siimon/prom-client
// prometheus metrics

const Registry = { client };
const register = new Registry();
const collectDefaultMetrics = { client };

// Probe every 5th second.

collectDefaultMetrics({ register, timeout: 5000, prefix: 'default_' });

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('/metrics', (req, res) => {
  app.log('GET -> metrics called.');
  res.set('Content-Type', register.contentType);
  res.end(register.metrics());
});

app.get('/test_count', (req, res) => {
  app.log('GET -> /reset.');
  prom.reset();

  res.send(`Counter reset ${new Date()}`);
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server started on port 5000');
});
