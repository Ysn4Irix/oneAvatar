/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 28-05-2022
 * @modify date 05-09-2022
 * @desc [Clients Model]
 */

const mongoose = require("mongoose")

const apikeySchema = mongoose.Schema(
  {
    apikey: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("apikeys", apikeySchema)
