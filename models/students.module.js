const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    dateOfBirth: {
        type: Date,
        required: true,
        default: Date.now,
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    prarents: {
        type: String,
        trim: true,
    },
    address: {
        street: {
            type: String,
            trim: true,
        },
        city: {
            type: String,
            trim: true,
        },
        state: {
            type: String,
            trim: true,
        },
        pinCode: {
            type: String,
            trim: true,
        },
        country: {
            type: String,
            trim: true,
        },
    },
    enrollmentDate: {
        type: Date,
        default: Date.now,
    },

    isActive: {
        type: Boolean,
        default: true,
    },
    profilePicture: {
        type: String,
        default: "default.jpg",
    },
    role: {
        type: String,
        enum: ["student", "admin"],
        default: "student",
    },
    className: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true,
    },
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
        required: true,
    },
    grade: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Grade",
        required: true,
    },
});

const StudentModel = mongoose.model("Student", studentSchema);

module.exports = { StudentModel };
