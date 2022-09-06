/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 28-05-2022
 * @modify date 06-09-2022
 * @desc [functions]
 */
module.exports = () => {
  let letters = "0123456789ABCDEF",
    color = "#",
    generatedNumber,
    i
  for (i = 0; i < 6; i++) {
    generatedNumber = Math.floor(Math.random() * 16)
    color += letters[generatedNumber]
  }
  return color
}
