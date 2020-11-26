const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  oauth_id: String,
});

userSchema.statics.findOrCreate = async function (id, callback) {
  let user = await this.findOne({ oauth_id: id }, (err, doc) => {
    if (err) callback(err, null);
    else if (doc) callback(err, doc);
  });
  if (!user) {
    user = await new this({ oauth_id: id }).save();
  }
  callback(null, user);
};

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
