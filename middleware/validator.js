const { validationResult, buildCheckFunction } = require('express-validator');
const mongoose = require('mongoose')


exports = module.exports = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
        }

        res.status(400).json({ errors: errors.array() });
    };
};

exports.isValidObjecId = (location, param) => {
    return buildCheckFunction(location)(param).custom(value => {
        const isObjectId = mongoose.isValidObjectId(value)
        if (isObjectId) {
            return Promise.resolve()
        }
        return Promise.reject('ID类型错误')
    })
}