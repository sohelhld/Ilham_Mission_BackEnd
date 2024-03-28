const express = require("express");
const { addStudent, getStudent } = require("../controller/students.controller");

const studentRouter = express.Router();

studentRouter.get("/", getStudent);
studentRouter.post("/addStudent", addStudent);

module.exports = { studentRouter };
