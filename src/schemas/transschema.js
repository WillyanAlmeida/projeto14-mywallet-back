import joi from "joi"

export const schemastransaction = joi.object({
    id: joi.string().required(),
    value: joi.number().positive().required(),
    description: joi.string().required()
})
