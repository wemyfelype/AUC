var dotenv = require('dotenv-safe').load();
const mongoClient = require("mongodb").MongoClient;

mongoClient.connect(process.env.MONGO_CONNECTION, function(err, conn){
    if(err) { return console.log(err); }
    console.log("conectou no banco de dados!");
    global.db = conn.db(process.env.MONGO_DB);
});

