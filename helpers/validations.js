/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 28-05-2022
 * @modify date 06-09-2022
 * @desc [Input Validations]
 */

const joi = require("joi")

const options = {
  abortEarly: false,
  errors: {
    wrap: {
      label: "",
    },
  },
}

const validateData = (data) => {
  const schema = joi.object({
    size: joi.number().required().valid(512, 256),
    rounded: joi.string().valid("yes", "no").required(),
    background: joi.string().min(6).max(6).required().trim().default("random"),
    fullname: joi.string().min(4).max(20).required().trim(),
    bold: joi.string().valid("yes", "no").required(),
  })
  return schema.validate(data, options)
}

module.exports = validateData
