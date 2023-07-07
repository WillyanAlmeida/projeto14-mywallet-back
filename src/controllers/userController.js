import { v4 as uuid } from "uuid";
import bcrypt from 'bcrypt';
import { db } from "../database/databaseconnections.js";


export async function signup(req, res) {
    const { name, email } = req.body
    console.log(req.body)

    function validateSchema(body) {

        let formsignup = schemasignup.validate(req.body, { abortEarly: false })
        if (formsignup.error) {
            const erros = validation.error.details.map(detail=>detail.message)
            return res.status(422).send(erros)
        }
    }

    try {
        let user = await db.collection('users').findOne({ email });
        console.log(user)
        if (user) return res.status(409).send("E-mail de usuário ja cadastrado!");

        const passwordHashed = bcrypt.hashSync(req.body.password, 10);
        delete req.body.password;
        await db.collection("users").insertOne({
            name,
            email,
            password: passwordHashed
        });
        res.status(201).send("Usuário cadastrado com sucesso!");
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function signin(req, res) {
    const { email, password } = req.body;


    const formsignup = schemasignin.validate(req.body, { abortEarly: false })
    if (formsignup.error) return res.status(422).send("Todos os campos são obrigatórios!")

    try {
        const user = await db.collection('users').findOne({ email });
        if (!user) return res.status(404).send("Usuário e/ou senha incorretos!");

        const correctPassword = bcrypt.compareSync(password, user.password);
        if (!correctPassword) return res.status(401).send("Usuário e/ou senha incorretos!");

        const token = uuid();

        db.collection("sessions").insertOne({ userId: user._id, token, });

        res.status(200).send({ token });
    }
    catch (error) {
        console.log(error);
        res.sendStatus(401);
    }
}