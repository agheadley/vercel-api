import { MongoClient } from "mongodb";

/*
module.exports = (req, res) => {
  res.send("***" + process.env.VERCEL_URL);
};
*/

module.exports = (req, res) => {
  MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
    if (err) res.send("error with mongoclient");
    res.send("Database connected");
    db.close();
  });
};
