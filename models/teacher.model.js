const teacherSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    department: { type: String, required: true },
    classAssign: [{ type: Schema.Types.ObjectId, ref: "Class" }],
});

const TeacherModel = mongoose.model("Teacher", teacherSchema);

module.exports = { TeacherModel };
