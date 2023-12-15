const pool = require("../../db");
const query = require("./queries");

const getStudents = (req, res) => {
  pool.query(query.getStudents, (err, results) => {
    if (err) {
      console.log(
        `Something went wrong while trying to find all the students and here is the ERROR: ${err}`
      );
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(200).json(results.rows);
  });
};

const getStudentByID = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(query.getStudentByID, [id], (err, results) => {
    if (err) {
      console.log(
        `Something went wrong while trying to find a student with the ID: ${id} and here is the ERROR: ${err}`
      );
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.status(200).json(results.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, birth } = req.body;

  // first we check if email already exists:
  pool.query(query.checkEmailExistance, [email], (err, result) => {
    if (err) {
      console.log(
        `Something went wrong while checking email existence and here is the ERROR: ${err}`
      );
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.rows.length) res.status(404).json("Email already exists");

    // if email is unique then we add new student:
    pool.query(query.addStudent, [name, email, age, birth], (err, result) => {
      if (err) {
        console.log(
          `Something went wrong while trying to save a student data and here is the ERROR: ${err}`
        );
        return res.status(500).json({ error: "Internal Server Error" });
      }

      res.status(201).json("Student created successfully!");
    });
  });
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);

  // first we check if a student exists:
  pool.query(query.checkStudentExistanceByItsID, [id], (err, result) => {
    if (err) {
      console.error(`Error checking student existence by ID: ${err}`);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!result.rows.length) {
      return res
        .status(404)
        .json({ message: `Student with ID ${id} does not exist` });
    }

    // if it exists, then we will remove it:
    pool.query(query.removeStudentByID, [id], (err, result) => {
      if (err) {
        console.error(`Error removing student by ID: ${id} - ${err}`);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      return res
        .status(200)
        .json({ message: `Student with ID: ${id} was successfully removed` });
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email, age, birth } = req.body;

  // first we check if a student exists:
  pool.query(query.checkStudentExistanceByItsID, [id], (err, result) => {
    if (err) {
      console.error(`Error checking student existence by ID: ${err}`);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (!result.rows.length) {
      return res
        .status(404)
        .json({ message: `Student with ID ${id} does not exist` });
    }

    pool.query(
      query.updateStudent,
      [id, name, email, age, birth],
      (err, result) => {
        if (err) {
          console.error(
            `Error updating a student with the ID ${id} and here is the ERROR: ${err}`
          );
          return res.status(500).json({ error: "Internal Server Error" });
        }

        return res
          .status(201)
          .json({ message: `Student with ID: ${id} was successfully updated` });
      }
    );
  });
};

module.exports = {
  getStudents,
  getStudentByID,
  addStudent,
  removeStudent,
  updateStudent,
};
