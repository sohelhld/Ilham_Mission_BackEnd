// teacherRoutes.js

const express = require("express");
const teacherRoute = express.Router();
const {
	createTeacher,
	getAllTeachers,
	getTeacherById,
	updateTeacher,
	deleteTeacher,
} = require("../controllers");
const { getTeacher } = require("../middlewares");



teacherRoute.post("/", createTeacher);

teacherRoute.get("/", getAllTeachers);

teacherRoute.get("/:id", getTeacher, getTeacherById);

teacherRoute.patch("/:id", getTeacher, updateTeacher);

teacherRoute.delete("/:id", getTeacher, deleteTeacher);

module.exports = teacherRoute;
