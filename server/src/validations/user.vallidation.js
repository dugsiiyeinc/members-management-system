import Joi from 'joi';

export const validateUserRegistration = (req, res, next) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(10).required().message(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
    })

    const { error } = schema.validate(req.body);

    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    next();

}