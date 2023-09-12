import Joi from 'joi';

export const validateAddingMember = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30).required(),
        email: Joi.string().email().required(),
        age: Joi.number().required(),
        role: Joi.string().min(3).max(30).required()
    })

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    next();

}

export const validateUpdatingMember = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(30),
        email: Joi.string().email(),
        age: Joi.number(),
        role: Joi.string().min(3).max(30)
    })

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    next();

}