"use strict";
exports.__esModule = true;
var mongodb_1 = require("mongodb");
var url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4";
var client = null;
try {
    client = new mongodb_1.MongoClient(url);
    console.log("Database connect successful");
}
catch (e) {
    console.log("Database connect failed");
    process.exit(1);
}
exports["default"] = client;
//# sourceMappingURL=dbConnection.js.map