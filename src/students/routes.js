const { Router } = require("express");
const controllers = require("./controllers");

const router = Router();

router.get("/read-students", controllers.getStudents);

module.exports = router;
