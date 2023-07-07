import { MongoClient } from "mongodb";
import dotenv  from "dotenv";


const mongoClient = new MongoClient(process.env.DATABASE_URL);
dotenv.config()

try {
    await mongoClient.connect();
    console.log("MongoDB conectad")
}catch (err){
    (err)=> console.log(err.message)
}
export const db = mongoClient.db();
