/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 28-05-2022
 * @modify date 06-09-2022
 * @desc [Avatar Controller]
 */

const validateData = require("../helpers/validations")
const randomColor = require("../helpers/functions")

const index = {
  indexRouter: async (req, res, next) => {
    if (req.method !== "GET")
      return next(new Error(`${req.method} is not allowed`))

    const { error } = validateData(req.query)
    if (error) return next(error)

    const { size, rounded, background, fullname, bold } = req.query

    try {
      const spaceDecoded = decodeURIComponent(fullname)
      let extraction = ""

      if (spaceDecoded.includes(" ")) {
        const values = spaceDecoded.split(" ")
        const first_name = values[0]
        const last_name = values[1]
          ? spaceDecoded.substr(spaceDecoded.indexOf(" ") + 1)
          : ""
        extraction = first_name.slice(0, 1) + last_name.slice(0, 1)
      } else {
        extraction = fullname.slice(0, 2)
      }

      const letterColorArray = ["#ffffff", "#000000"]

      const letterRandomColor =
        letterColorArray[Math.floor(Math.random() * letterColorArray.length)]

      const svg = `<svg
      style="isolation: isolate;"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="${size}"
      height="${size}"
      viewBox="0 0 ${size} ${size}"
      version="1.1"
    >
      <${rounded === "yes" ? "circle" : "rect"}
        fill="${background == "random" ? randomColor() : "#" + background}"
        cx="${size / 2}"
        width="${size}"
        height="${size}"
        cy="${size / 2}"
        r="${size / 2}"
      />
      <text
        x="50%"
        y="50%"
        style="
          line-height: 1;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
            'Oxygen', 'Ubuntu', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        "
        alignment-baseline="middle"
        text-anchor="middle"
        font-size="${size == 512 ? 224 : 112}"
        font-weight="${bold === "yes" ? "bold" : 500}"
        dy=".1em"
        dominant-baseline="middle"
        fill="${letterRandomColor}"
      >
         ${extraction.toUpperCase()}
      </text>
    </svg>
    `
      res.status(200).send(svg)
    } catch (error) {
      next(error)
    }
  },
}

module.exports = index
