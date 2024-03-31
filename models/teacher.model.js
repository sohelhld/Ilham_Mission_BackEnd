const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	department: { type: String, required: true },
	classAssign: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
});

const TeacherModel = mongoose.model("Teacher", teacherSchema);

module.exports = TeacherModel;
