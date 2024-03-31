const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
	student: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Student",
		required: true,
	},
	allSubjects: [
		{
			subject: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Subject",
				required: true,
			},
			marks: { type: Number, required: true },
		},
	],
});

const GradeModel = mongoose.model("Grade", gradeSchema);
module.exports = GradeModel;
