import mongoose from 'mongoose'
import { logger } from '../logger'

function dbconnect() {
    mongoose.connect(
        process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err) logError(err)
            else logger.info('MongoDB connected')
        }
    )
    return mongoose.connection
}

function dbclose() {
    return mongoose.disconnect()
}

export { dbclose, dbconnect }
