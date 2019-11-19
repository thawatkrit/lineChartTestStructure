const Joi = require("@hapi/joi");
const InvalidRequestError = require('../errors/invalid-request-error')

const lineChartRequestSchema = Joi.object({
  cid: Joi.string().required()
});

validatelineChartRequest = data => {
  const v =  lineChartRequestSchema.validate(data,{ stripUnknown: true });
  if (v.error) {
    throw new InvalidRequestError("Invalid Request", v.error.message);
  }
  return v.value;
};

module.exports = {
  validatelineChartRequest
};
