const mongoose = require("mongoose");

module.exports = (req, res) => {
  try {
    mongoose.connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("connected")
    );
    res.send("connected");
  } catch (error) {
    console.log("could not connect via mongoose");
    res.send("error in connection");
  }
};
