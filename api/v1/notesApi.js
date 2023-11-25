const create = require("../../controllers/CreateNote").create;
const router = require("express").Router();
const edit = require("../../controllers/editNote").editNote;
const getSingleNote = require("../../controllers/getSingleNote").getSingleNote;
const search = require("../../controllers/search").search;
const deleteNote = require("../../controllers/deleteNote").deleteNote;


router.route('/add')
.post(create)

router.route('/get/:id')
.get(getSingleNote)

router.route('/search/:queryString')
.get(search)

router.route('/edit/:id')
.put(edit)

router.route('/delete/:id')
.delete(deleteNote)

module.exports = router;