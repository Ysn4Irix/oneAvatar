/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 28-05-2022
 * @modify date 15-06-2022
 * @desc [APIKEY Generator]
 */

const {
  randomBytes
} = require("crypto");

function genApikey() {
  const rand = randomBytes(35);

  let chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".repeat(5);

  let str = "";

  for (let i = 0; i < rand.length; i++) {
    let decimal = rand[i];
    str += chars[decimal];
  }

  return str;
}

module.exports = genApikey;