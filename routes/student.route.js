const express = require("express");
const {
	addStudent,
	getStudent,
	updateStudent,
	deleteStudent,
} = require("../controller/students.controller");

const studentRouter = express.Router();

studentRouter.get("/", getStudent);
studentRouter.post("/addStudent", addStudent);
studentRouter.patch("/updateStudent/:id", updateStudent);
studentRouter.delete("/deleteStudent/:id", deleteStudent);

module.exports = studentRouter;
