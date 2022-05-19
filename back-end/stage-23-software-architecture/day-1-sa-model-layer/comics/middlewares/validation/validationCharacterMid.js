const Joi = require('joi');

const characterDTO = Joi.object({
  name: Joi.string().required(),
  cartoon: Joi.string().required(),
  year: Joi.number().required(),
}).messages({
  "any.required": "campo {{#label}} é obrigatório",
  "number.base": "campo {{#label}} deve ser numérico"
});

const validationCharacterMid = (req, res, next) => {
  const { error } = characterDTO.validate(req.body, { abortEarly: false });

  if (!error) { return next(); }

  const messages = erros.details.map(e => e.message);
  return res.status(401).json({ Error: messages });
};

module.exports = validationCharacterMid;