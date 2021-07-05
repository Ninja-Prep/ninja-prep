import {connect, disconnect} from 'question-database';
import {logError, logger} from 'utils/logging/logger';
import mongoose from 'mongoose';

function dbconnect(): mongoose.Connection {
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) logError(err);
      else logger.info('MongoDB connected');
    },
  );
  connect(process.env.MONGO_URL);
  return mongoose.connection;
}

function dbclose(): Promise<void> {
  disconnect();
  return mongoose.disconnect();
}

export {dbclose, dbconnect};
