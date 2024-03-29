import 'initializers/passport';
import {dbconnect} from 'initializers/mongoose';
import {logError, logger} from 'utils/logging/logger';
import express from 'express';
import initializeMiddleWare from 'initializers/middleware';

const app = express();
initializeMiddleWare(app);
dbconnect();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server started on port ${PORT}`);
});

process.on('uncaughtException', (error) => {
  logError(error);
});
