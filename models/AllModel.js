const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define schema for Student
// const studentSchema = new Schema({
//     name: { type: String, required: true },
//     age: { type: Number, required: true },
//     class: { type: Schema.Types.ObjectId, ref: "Class", required: true },
//     section: { type: Schema.Types.ObjectId, ref: "Section", required: true },
//     grade: { type: Schema.Types.ObjectId, ref: "Grade", required: true },
//     address: String,
// });

// Define schema for Teacher
// const teacherSchema = new Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     department: { type: String, required: true },
//     classAssign: [{ type: Schema.Types.ObjectId, ref: "Class" }],
// });

// Define schema for Class
// const classSchema = new Schema({
//     name: { type: String, required: true },
//     teacher: { type: Schema.Types.ObjectId, ref: "Teacher", required: true },
//     section: { type: Schema.Types.ObjectId, ref: "Section", required: true },
// });

// Define schema for Subject
// const subjectSchema = new Schema({
//     name: { type: String, required: true },
//     subjectCode: { type: String, required: true, unique: true },
// });

// Define schema for Grade
// const gradeSchema = new Schema({
//     student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
//     allSubjects: [
//         {
//             subject: {
//                 type: Schema.Types.ObjectId,
//                 ref: "Subject",
//                 required: true,
//             },
//             marks: { type: Number, required: true },
//         },
//     ],
// });

// Define schema for Attendance
// const attendanceSchema = new Schema({
//     student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
//     class: { type: Schema.Types.ObjectId, ref: "Class", required: true },
//     date: { type: Date, required: true },
//     status: { type: String, enum: ["Present", "Absent"], required: true },
// });

// Define schema for Section
// const sectionSchema = new Schema({
//     name: { type: String, required: true },
// });

// Create models based on the schemas
// const Student = mongoose.model("Student", studentSchema);
// const Teacher = mongoose.model("Teacher", teacherSchema);
// const Class = mongoose.model("Class", classSchema);
// const Subject = mongoose.model("Subject", subjectSchema);
const Grade = mongoose.model("Grade", gradeSchema);
// const Attendance = mongoose.model("Attendance", attendanceSchema);
// const Section = mongoose.model("Section", sectionSchema);

// module.exports = {
//     // Student,
//     Teacher,
//     Class,
//     Subject,
//     Grade,
//     Attendance,
//     Section,
// };
