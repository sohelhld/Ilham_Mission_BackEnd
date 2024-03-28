const gradeSchema = new Schema({
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    allSubjects: [
        {
            subject: {
                type: Schema.Types.ObjectId,
                ref: "Subject",
                required: true,
            },
            marks: { type: Number, required: true },
        },
    ],
});

const GradeModel = mongoose.model("Grade", gradeSchema);
module.exports = { GradeModel };
