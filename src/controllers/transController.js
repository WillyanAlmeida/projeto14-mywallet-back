
import { db } from "../database/databaseconnections.js";
import dayjs from "dayjs";


export async function transactionreg(req, res) {
    const { value, description, id } = req.body;
    let type = req.params.id

    try {
        db.collection("transactions").insertOne({ userId: id, value, description, type, date: dayjs().format('MM/DD') });

        res.status(200).send("ok");
    }
    catch (error) {
        console.log(error);
        res.sendStatus(401);
    }
}

export async function transactionget (req, res){

try{
    const transactions = await db.collection('transactions').find({userID: res.locals.sessions.userID}).toArray();
    res.status(200).send(transactions.reverse());

} catch (error) {
        console.log(error);
        res.sendStatus(401);
    }
}


