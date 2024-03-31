const StudentModel = require("../models/students.model");
const AttendanceModel = require("../models/attendance.model");
const { ClassModel, SectionModel } = require("../models/classAndSection.model");
const GradeModel = require("../models/grade.model");
const TeacherModel = require("../models/teacher.model");

module.exports = {
	StudentModel,
	AttendanceModel,
	ClassModel,
	SectionModel,
	GradeModel,
	TeacherModel,
};
