/**
 * @author Ysn4Irix
 * @email ysn4irix@gmail.com
 * @create date 05-09-2022
 * @modify date 05-09-2022
 * @desc [Database connection]
 */

module.exports = (connect, connection) => {
  connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  connection.on("connected", () => {
    console.log("🎉 Mongoose connected to db")
  })

  connection.on("error", (err) => {
    console.log("Mongoose connection error.", err.message)
  })

  connection.on("disconnected", () => {
    console.log("Mongoose connection is disconnected.")
  })
}
