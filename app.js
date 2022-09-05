/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 28-05-2022
 * @modify date 05-09-2022
 * @desc [Server Entry Point]
 */

require("dotenv").config()
const express = require("express")
const logger = require("morgan")
const helmet = require("helmet")
const { connect, connection } = require("mongoose")
const connectToDB = require("./database/db")
const { PORT } = process.env
const middlewares = require("./helpers/middlewares")
const app = express()

if (process.env.NODE_ENV === "development") app.use(logger("dev"))
app.use(helmet())

app.use(
  express.urlencoded({
    extended: false,
  })
)

connectToDB(connect, connection)

app.use("/api/v1", require("./routes/index"))

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

const server = app.listen(PORT, () => {
  console.log(
    `🚀 Server started => listening on PORT: ${PORT} with processId: ${process.pid}`
  )
})

process.on("SIGINT", () => {
  console.info("SIGINT signal received.")
  console.log("Server is closing.")
  server.close(() => {
    console.log("Server closed.")
    connection.close(false, () => {
      process.exit(0)
    })
  })
})

process.on("SIGTERM", () => {
  console.info("SIGTERM signal received.")
  console.log("Server is closed.")
  server.close(() => {
    console.log("Server closed.")
    connection.close(false, () => {
      process.exit(0)
    })
  })
})

module.exports = app
