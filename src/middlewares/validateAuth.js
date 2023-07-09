import { db } from "../database/databaseconnections.js"

export async function validateAuth(req, res, next) {
    console.log(req.headers)
    const { authorization } = req.headers
    const token = authorization?.replace("Bearer ", "")
    if (!token) return res.sendStatus(401)
    try {
        const sessions = await db.collection("sessions").findOne({ token })
        if (!sessions) return res.sendStatus(401)

        res.locals.sessions = sessions;
        next()
    } catch (err) {
        res.status(500).send(err.message)
    }
}