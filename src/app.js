import express, { Router } from 'express';
import cors from "cors";
import router from './routes/indexroutes.js';

const app = express();
app.use(cors());
app.use(express.json())



app.use(router)


app.listen(5000, () => console.log("server on"));


