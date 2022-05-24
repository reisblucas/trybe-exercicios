const Joi = require('joi');

const ocurrenceDTO = Joi.object.pattern({
  descricao: Joi.string().max(50).required,
  dataHora: Joi.date().timestamp().required,
  categoria: Joi.string(20).required,
  endereco: Joi.object.pattern({
    logradouro: Joi.string(100).required,
    numero: Joi.string().max(10).required,
    bairro: Joi.string().max(25).required,
    cep: Joi.string().min(8).max(9).required, // only cep brasileiro
  }).required,
}).messages({
  "any.required": "Campo {{#label}} é obrigatório",
  "number.base": "Campo {{#label}} deve ser numérico"
});

const ocurrenceObjectVerifier = (req, res, next) => {
  
};

module.exports = ocurrenceDTO;