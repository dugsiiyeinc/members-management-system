import Joi from 'joi';

export const validateUserRegistration = (req, res, next) => {
    const schema = Joi.object({
        fullname: Joi.string().min(3).max(30).required(),
        username: Joi.string().min(3).max(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    })

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    next();

}

export const validateUserLogin = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email(),
        username: Joi.string(),
        password: Joi.string().min(6).required()
    })

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    next();

}