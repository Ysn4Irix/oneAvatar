/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 28-05-2022
 * @modify date 15-06-2022
 * @desc [Server Entry Point]
 */
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const helmet = require("helmet");
const {
  connect
} = require("mongoose")

const router = require("./routes/index");
const middlewares = require("./helpers/middlewares")
const app = express();

app.set('view engine', 'ejs');

app.use(logger("common"));
app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "script-src": ["'self' unpkg.com", "'unsafe-eval'"],
      "font-src": [
        "'self' fonts.googleapis.com fonts.gstatic.com",
      ],
      "style-src": ["'self' 'unsafe-inline' fonts.googleapis.com"],
    },
  })
);

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected 🎉");
    const port = process.env.PORT || 2222;
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port} 🎉`);
    });
  })
  .catch((err) => console.log(err));

module.exports = app;