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

teacherRoute.post("/createTeacher", createTeacher);

teacherRoute.get("/getAllTeachers", getAllTeachers);

teacherRoute.get("/getTeacherById/:id", getTeacher, getTeacherById);

teacherRoute.patch("/updateTeacher/:id", getTeacher, updateTeacher);

teacherRoute.delete("/deleteTeacher/:id", getTeacher, deleteTeacher);

module.exports = teacherRoute;
