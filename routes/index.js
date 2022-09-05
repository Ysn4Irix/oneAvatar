const router = require("express").Router()
const avatar = require("../controllers/avatarController")

/* GET index response. */
router.get("/generateKey", avatar.genApikey)
router.get("/", avatar.indexRouter)

module.exports = router
