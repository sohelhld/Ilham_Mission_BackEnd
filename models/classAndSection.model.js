const classSchema = new Schema({
	name: { type: String, required: true },
	teacher: { type: Schema.Types.ObjectId, ref: "Teacher", required: true },
	section: { type: Schema.Types.ObjectId, ref: "Section", required: true },
});

const sectionSchema = new Schema({
	name: { type: String, required: true },
});

const ClassModel = mongoose.model("Class", classSchema);

const SectionModel = mongoose.model("Section", sectionSchema);

module.exports = { ClassModel, SectionModel };
