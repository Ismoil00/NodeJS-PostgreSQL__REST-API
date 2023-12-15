const { Router } = require("express");
const controllers = require("./controllers");

const router = Router();

router.get("/read", controllers.getStudents);
router.get("/read/:id", controllers.getStudentByID);
router.post("/create", controllers.addStudent);
router.delete("/delete/:id", controllers.removeStudent);
router.put("/update/:id", controllers.updateStudent);

module.exports = router;
