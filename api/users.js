//const mongoose = require("mongoose");

module.exports = (req, res) => {
  res.send("***" + process.env.MONGODB_URI + process.env.VERCEL_URL);
};

/*
module.exports = (req, res) => {
  try {
    mongoose.connect(
      process.env.MONGODB_URI,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("connected")
    );
    res.send("connected" + process.env.MONGODB_URI);
  } catch (error) {
    console.log("could not connect via mongoose");
    res.send("error in connection");
  }
};

*/
