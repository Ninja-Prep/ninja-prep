const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: String,
  first_name: String,
  premium_expiration_date: Date,
  profile_picture: String,
});

userSchema.statics.findOrCreate = async function (profile, callback) {
  console.log("The profile", profile);
  let user = await this.findById({ _id: profile.id }, (err, doc) => {
    if (err) callback(err, null);
    else if (doc) {
      callback(err, doc);
    }
  });
  if (!user) {
    let name = "";

    if (profile.displayName) {
      name = profile.displayName.split(" ")[0];
    } else if (profile.username) {
      name = profile.username;
    }

    user = await new this({
      _id: profile.id,
      first_name: name,
      premium_expiration_date: new Date(Date.now()),
      profile_picture: profile.photos[0].value,
    }).save();
  }
  callback(null, user);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
