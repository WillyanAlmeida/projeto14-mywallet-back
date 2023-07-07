import express from 'express';
import cors from "cors";


import { MongoClient, ObjectId } from "mongodb";
import router from './routes/indexroutes.js';

const app = express();
app.use(cors());
app.use(express.json())



app.use(router)


app.listen(5000, () => console.log("server on"));


