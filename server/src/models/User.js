const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  first_name: String,
  premium_expiration_date: Date,
  oauth_id: String,
});

userSchema.statics.findOrCreate = async function (profile, callback) {
  let user = await this.findOne({ oauth_id: profile.id }, (err, doc) => {
    if (err) callback(err, null);
    else if (doc) callback(err, doc);
  });
  if (!user) {
    user = await new this({
      oauth_id: profile.id,
      first_name: profile._json.name.split(" ")[0],
      premium_expiration_date: new Date(Date.now()),
    }).save();
  }
  console.log(user);
  callback(null, user);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
