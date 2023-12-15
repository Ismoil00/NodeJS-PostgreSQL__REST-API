const getStudents = "SELECT * FROM students";
const getStudentByID = "SELECT * FROM students WHERE ID = $1";
const checkEmailExistance = "SELECT s FROM students s WHERE s.email = $1";
const addStudent =
  "INSERT INTO students (name, email, age, birth) VALUES ($1, $2, $3, $4)";
const removeStudentByID = "DELETE FROM students WHERE id = $1";
const checkStudentExistanceByItsID = "SELECT s FROM students s WHERE s.id = $1";
const updateStudent =
  "UPDATE students SET name = $2, email = $3, age = $4, birth = $5 WHERE id = $1";

module.exports = {
  getStudents,
  getStudentByID,
  checkEmailExistance,
  addStudent,
  removeStudentByID,
  checkStudentExistanceByItsID,
  updateStudent,
};
