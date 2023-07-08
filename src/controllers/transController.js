
import { db } from "../database/databaseconnections.js";


export async function transactionreg(req, res) {
    const { value, description, id } = req.body;
    let type = req.params.id

    try {
     

        db.collection("transactions").insertOne({ userId: id, value, description, type, date: dayjs().format("L") });

        res.status(200).send("ok");
    }
    catch (error) {
        console.log(error);
        res.sendStatus(401);
    }
}