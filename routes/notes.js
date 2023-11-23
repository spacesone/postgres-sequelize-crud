const { create } = require("../controllers/CreateNote");

const router = require("express").Router();


router.route('/add')
.get(create)

module.exports = router;