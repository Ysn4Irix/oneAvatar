/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 28-05-2022
 * @modify date 05-09-2022
 * @desc [functions]
 */
module.exports = {
  generateApiKeys: () => {
    return require("crypto")
      .createHash("sha256")
      .update(require("uuid").v4())
      .update("salt")
      .digest("hex")
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
