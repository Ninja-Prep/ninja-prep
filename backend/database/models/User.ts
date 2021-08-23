import mongoose from '@mongoose';

export interface IUserDocument {
  id: string;
  firstName: string;
  premiumExpirationDate: Date;
  profilePicture: string;
  emailAddress: string;
}

export interface FindOrCreateUserInput {
  id: string;
  firstName: string;
  profilePicture?: string;
  emailAddress?: string;
}

interface IUserModel extends mongoose.Model<IUserDocument> {
  findOrCreate: (input: FindOrCreateUserInput, callback: any) => void;
}

const userSchema = new mongoose.Schema<IUserDocument, IUserModel>({
  _id: String,
  firstName: String,
  premiumExpirationDate: Date,
  profilePicture: String,
  emailAddress: String,
});

userSchema.statics.findOrCreate = async function (
  input: FindOrCreateUserInput,
  callback: any,
) {
  let user = await this.findById(input.id, (err: any, doc: any) => {
    if (err) {
      callback(err, null);
    } else if (doc) {
      callback(err, doc);
    }
  });
  if (!user) {
    user = await new this({
      _id: input.id,
      firstName: input.firstName,
      premiumExpirationDate: new Date(Date.now()),
      profilePicture: input.profilePicture,
    }).save();
  }
  callback(null, user);
};

export default mongoose.model<IUserDocument, IUserModel>('user', userSchema);
