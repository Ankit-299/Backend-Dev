const express = require("express");
const app = express();
app.use(express.json());

let students = [
  { id: 1, name: "Aman", marks: 60, city: "Hyderabad" },
  { id: 2, name: "Naman", marks: 75, city: "Pune" },
];
// View students
app.get("/students", (req, res) => {
  res.json(students);
});
// PATCH — update any one field (marks or city)
app.patch("/students/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const student = students.find((s) => s.id == id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  // Apply partial updates
  Object.assign(student, updates);
  res.json({
    message: "Student updated successfully",
    student,
  });
});
app.listen(8000, () => console.log("Server Started"));

//Active or Inactive 

// View students
app.get("/students", (req, res) => {
  res.json(students);
});

app.patch("/students/:id/status", (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  // find student
  const student = students.find(s => s.id == id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  // validate status
  if (status !== "active" && status !== "inactive") {
    return res.status(400).json({ message: "Status must be active or inactive" });
  }

  // update only status
  student.status = status;

  res.json({
    message: "Student status updated successfully",
    student
  });
});

app.listen(8000, () => console.log("Server Started"));