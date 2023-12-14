const { Router } = require("express");

const router = Router();

router.get("/read-students", (req, res) => {
  res.send("using api route");
});

module.exports = router;
