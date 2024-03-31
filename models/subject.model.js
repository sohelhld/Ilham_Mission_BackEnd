const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
	name: { type: String, required: true },
	subjectCode: { type: String, required: true, unique: true },
});

const SubjectModel = mongoose.model("Subject", subjectSchema);

module.exports = SubjectModel;
