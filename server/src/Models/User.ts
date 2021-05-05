import { Document, model, Model, Schema } from 'mongoose'
import { logError } from '../logger'

const userSchema = new Schema({
    _id: String,
    first_name: String,
    premium_expiration_date: Date,
    profile_picture: String
})

export interface IUserDocument extends Document {
    id: string
    first_name: string
    premium_expiration_date: Date
    profile_picture: string
}

interface IUserModel extends Model<IUserDocument> {
    findOrCreate: (profile: any, callback: any) => any
}

userSchema.statics.findOrCreate = async function (profile, callback) {
    let user = await this.findById(profile.id, (err: any, doc: any) => {
        if (err) {
            logError(err)
            callback(err, null)
        } else if (doc) {
            callback(err, doc)
        }
    })
    if (!user) {
        let name = ''

        if (profile.displayName) {
            name = profile.displayName.split(' ')[0]
        } else if (profile.username) {
            name = profile.username
        }

        user = await new this({
            _id: profile.id,
            first_name: name,
            premium_expiration_date: new Date(Date.now()),
            profile_picture: profile.photos[0].value
        }).save()
    }
    callback(null, user)
}

const userModel: IUserModel = model<IUserDocument, IUserModel>('user', userSchema)

export default userModel
