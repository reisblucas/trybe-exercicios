const { CEP_REGEX } = require('../helpers/regex');

const cepVerifier = (req, res, next) => {
  const { cep } = req.params;

  if (CEP_REGEX.test(cep)) { return next(); }

  const bad_request = {
    "error": {
      "code": "invalidData",
      "message": "CEP inválido"
    }
  };
  return res.status(400).json(bad_request);
}

module.exports = cepVerifier;
