const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
	student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
	class: { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
	date: { type: Date, required: true },
	status: { type: String, enum: ["Present", "Absent"], required: true },
});

const AttendanceModel = mongoose.model("Attendance", attendanceSchema);
module.exports = AttendanceModel;
