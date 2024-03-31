const express = require("express");
const {
	addStudent,
	getStudent,
	updateStudent,
	deleteStudent,
} = require("../controllers/students.controller");

const studentRouter = express.Router();

studentRouter.get("/getStudents", getStudent);
studentRouter.post("/addStudent", addStudent);
studentRouter.patch("/updateStudent/:id", updateStudent);
studentRouter.delete("/deleteStudent/:id", deleteStudent);

module.exports = studentRouter;
