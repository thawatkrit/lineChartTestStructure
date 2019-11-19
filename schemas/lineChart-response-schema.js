const Joi = require("@hapi/joi");
const moment = require('moment');
const lineChartResponseSchema =
Joi.array().items(
  Joi.object().keys({
    cid: Joi.string().required(),
    date: Joi.date().min(moment().add(-30,'days').format('MM-DD-YYYY')).max('now').required(),
    cost: Joi.number().required(),
  }).options({ stripUnknown: true }));

validatelineChartResponse = data => {
  const v =  lineChartResponseSchema.validate(data);
  if (v.error) {
    throw new Error(v.error.message);
  }
  return v.value;
};

module.exports = {
  validatelineChartResponse
};
