import { MongoClient } from "mongodb";

module.exports = (req, res) => {
  MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
    if (err) res.send("error with mongoclient");
    res.send("Database connected");
    db.close();
  });
};

/*

module.exports = (req, res) => {
  MongoClient.connect(process.env.MONGODB_URI, function(err, db) {
    if (err) throw err;
    var dbo = db.db("db0");
    dbo.collection("c0").find({}, function(err, result) {
      if (err) res.send("error with mongoclient");
      res.send(result);
      db.close();
    });
  });
};

*/
