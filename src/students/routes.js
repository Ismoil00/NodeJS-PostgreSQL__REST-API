const { Router } = require("express");
const controllers = require("./controllers");

const router = Router();

router.get("/read", controllers.getStudents);
router.get("/read/:id", controllers.getStudentByID);

module.exports = router;
