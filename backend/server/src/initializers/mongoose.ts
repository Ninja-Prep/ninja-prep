import {logError, logger} from '@logger/logger';
import mongoose from 'mongoose';

function dbconnect(): mongoose.Connection {
  mongoose.connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) logError(err);
      else {
        logger.info('MongoDB connected');
      }
    },
  );
  return mongoose.connection;
}

function dbclose(): Promise<void> {
  return mongoose.disconnect();
}

export default mongoose;
export {dbclose, dbconnect};
