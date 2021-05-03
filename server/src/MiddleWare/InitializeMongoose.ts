import mongoose from 'mongoose'

function dbconnect() {
    mongoose.connect(
        process.env.MONGO_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
        (err) => {
            if (err) console.log(err)
            else console.log('MongoDB connected')
        }
    )
    return mongoose.connection
}

function dbclose() {
    return mongoose.disconnect()
}

export { dbclose, dbconnect }
