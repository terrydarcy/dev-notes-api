const router = require("express").Router();
console.log("test");

// // Require controller modules.
let note_controller = require("../controllers/noteController");

router.post("/:id", note_controller.note_create_post);

router.get("/", note_controller.notes_fetch_get);

module.exports = router;
