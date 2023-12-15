const pool = require("../../db");
const query = require("./queries");

const getStudents = (req, res) => {
  pool.query(query.getStudents, (err, results) => {
    if (err) throw err;

    res.status(200).json(results.rows);
  });
};

const getStudentByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(query.getStudentByID, [id], (err, results) => {
    if (err) throw err;

    res.status(200).json(results.rows);
  })
};

module.exports = {
  getStudents,
  getStudentByID,
};
