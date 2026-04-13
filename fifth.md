5. MongoDB Query

To find all students with a GPA greater than 3.5 and enrolled in the course “CS101”, the following MongoDB query can be used:

db.students.find({
  gpa: { $gt: 3.5 },
  course: "CS101"
});

This query filters documents where the gpa field is greater than 3.5 and the course field matches "CS101".