import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';

import { MongoClient, ObjectId } from "mongodb";


import { signin, signup } from './controllers/authController.js';

const app = express();
app.use(cors());
app.use(express.json())
app.listen(5000, () => console.log("server on"));

dotenv.config()

const mongoClient = new MongoClient(process.env.DATABASE_URL);
await mongoClient.connect();
export const db = mongoClient.db();

app.post("/sign-up", signup);


app.post("/sign-in", signin);