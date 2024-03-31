const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
	name: { type: String, required: true },
	teacher: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Teacher",
		required: true,
	},
	section: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Section",
		required: true,
	},
});

const sectionSchema = new mongoose.Schema({
	name: { type: String, required: true },
});

const ClassModel = mongoose.model("Class", classSchema);

const SectionModel = mongoose.model("Section", sectionSchema);

module.exports = { ClassModel, SectionModel };
