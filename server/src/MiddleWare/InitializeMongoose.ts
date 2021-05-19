import mongoose from 'mongoose'
import { connect, disconnect } from 'question-database'
import { logError, logger } from '../logger'

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
    connect(process.env.MONGO_URL)
    return mongoose.connection
}

function dbclose() {
    disconnect()
    return mongoose.disconnect()
}

export { dbclose, dbconnect }
