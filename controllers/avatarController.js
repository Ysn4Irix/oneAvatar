/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 28-05-2022
 * @modify date 28-05-2022
 * @desc [Avatar Controller]
 */

const {
  validateData
} = require("../helpers/validations");

const getRandomColor = require("../helpers/randomColor");

const index = {
  indexRouter: (req, res, next) => {
    const {
      error
    } = validateData(req.query);
    if (error) return next(error);

    const {
      size,
      rounded,
      background,
      fullname,
      bold
    } = req.query;

    const spaceDecoded = decodeURIComponent(fullname);
    let extraction = "";

    if (spaceDecoded.includes(" ")) {
      const values = spaceDecoded.split(" ");
      const first_name = values[0];
      const last_name = values[1] ? spaceDecoded.substr(spaceDecoded.indexOf(" ") + 1) : '';
      extraction = first_name.slice(0, 1) + last_name.slice(0, 1);
    } else {
      extraction = fullname.slice(0, 2);
    }

    const letterColorArray = [
      "#ffffff",
      "#000000",
    ];

    const randomColor = letterColorArray[Math.floor(Math.random() * letterColorArray.length)];

    res.render("avatar", {
      size: size,
      fontSize: size == 512 ? 224 : 112,
      rounded: rounded,
      background: background == "random" ? getRandomColor() : "#" + background,
      fullname: extraction.toUpperCase(),
      weight: bold == "true" ? "bold" : 600,
      letterColor: randomColor
    });
  },
};

module.exports = index;