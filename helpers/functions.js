/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 28-05-2022
 * @modify date 05-09-2022
 * @desc [functions]
 */

const { randomBytes } = require("crypto")

module.exports = {
  generateApiKeys: () => {
    const rand = randomBytes(35)

    let chars =
      "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".repeat(5)

    let str = ""

    for (let i = 0; i < rand.length; i++) {
      let decimal = rand[i]
      str += chars[decimal]
    }

    return str
  },
  randomColor: () => {
    let letters = "0123456789ABCDEF",
      color = "#",
      generatedNumber,
      i
    for (i = 0; i < 6; i++) {
      generatedNumber = Math.floor(Math.random() * 16)
      color += letters[generatedNumber]
    }
    return color
  },
}
