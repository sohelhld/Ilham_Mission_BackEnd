const subjectSchema = new Schema({
	name: { type: String, required: true },
	subjectCode: { type: String, required: true, unique: true },
});

const SubjectModel = mongoose.model("Subject", subjectSchema);

module.exports = SubjectModel;
