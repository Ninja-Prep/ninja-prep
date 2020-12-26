const mongoose = require("mongoose");
const MONGO_URL = require("../../config/keys").MONGO_URL;

mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("MongoDB connected");
  }
);

module.exports = mongoose;
