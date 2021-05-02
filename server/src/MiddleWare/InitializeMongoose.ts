import mongoose from 'mongoose'

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

export default mongoose
