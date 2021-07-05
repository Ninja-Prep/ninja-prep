import {Document, Model, Schema, model} from 'mongoose';
import {logError} from 'utils/logging/logger';

const userSchema = new Schema({
  _id: String,
  first_name: String,
  premium_expiration_date: Date,
  profile_picture: String,
});

export interface IUserDocument extends Document {
  id: string;
  firstName: string;
  premiumExpirationDate: Date;
  profilePicture: string;
}

interface IUserModel extends Model<IUserDocument> {
  findOrCreate: (profile: any, callback: any) => any;
}

userSchema.statics.findOrCreate = async function (profile: any, callback: any) {
  console.log('Find or create called', profile);
  let user = await this.findById(profile.id, (err: any, doc: any) => {
    if (err) {
      console.log(err);
      logError(err);
      callback(err, null);
    } else if (doc) {
      console.log(doc);
      callback(err, doc);
    }
  });
  console.log(user);
  if (!user) {
    let name = '';

    if (profile.displayName) {
      name = profile.displayName.split(' ')[0];
    } else if (profile.username) {
      name = profile.username;
    }

    user = await new this({
      _id: profile.id,
      firstName: name,
      premiumExpirationDate: new Date(Date.now()),
      profilePicture: profile.photos[0].value,
    }).save();
  }
  callback(null, user);
};

const userModel: IUserModel = model<IUserDocument, IUserModel>(
  'user',
  userSchema,
);

export default userModel;
