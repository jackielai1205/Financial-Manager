import {MongoClient} from "mongodb";

const url = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.4"

let client : MongoClient = null;

try{
    client = new MongoClient(url);
    console.log("Database connect successful");
}catch(e){
    console.log("Database connect failed");
    process.exit(1);
}

export default client;