import mongoose from 'mongoose'
import keys from '../../config/keys'

mongoose.connect(
    keys.MONGO_URL,
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
