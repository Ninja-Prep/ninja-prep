import mongoose from '@mongoose';

export interface IUserDocument {
  id: string;
  firstName: string;
  premiumExpirationDate: Date;
  profilePicture: string;
}

interface IUserModel extends mongoose.Model<IUserDocument> {
  findOrCreate: (profile: any, callback: any) => any;
}

const userSchema = new mongoose.Schema<IUserDocument, IUserModel>({
  _id: String,
  firstName: String,
  premiumExpirationDate: Date,
  profilePicture: String,
});

userSchema.statics.findOrCreate = async function (profile: any, callback: any) {
  let user = await this.findById(profile.id, (err: any, doc: any) => {
    if (err) {
      callback(err, null);
    } else if (doc) {
      callback(err, doc);
    }
  });
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

export default mongoose.model<IUserDocument, IUserModel>('user', userSchema);
