import joi from "joi"

export const schemasignup = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(3)
})

export const schemasignin = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3)
})
