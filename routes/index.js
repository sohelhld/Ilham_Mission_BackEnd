const gradeRouter = require("./grade.route");
const studentRouter = require("./student.route");
const subjectRouter = require("./subject.route");
const teacherRoute = require("./teacher.route");

module.exports = [studentRouter, teacherRoute, subjectRouter, gradeRouter];
