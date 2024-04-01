const GradeModel = require("../models/grade.model");

const createGrade = async (req, res) => {
    const { student, allSubjects } = req.body;
    try {
        const grade = new GradeModel({ student, allSubjects });
        await grade.save();
        res.status(201).send({ message: "New grade created", grade });
    } catch (error) {
        next(error);
    }
};

const getGrades = async (req, res) => {
    try {
        const grades = await GradeModel.find()
            .populate("student")
            .populate("allSubjects.subject");
        res.status(200).send({ message: "Getting all grades", grades });
    } catch (error) {
        next(error);
    }
};

const updateGrade = async (req, res) => {
    const { id } = req.params;
    const { student, allSubjects } = req.body;
    try {
        const grade = await GradeModel.findByIdAndUpdate(
            id,
            { student, allSubjects },
            { new: true }
        );
        if (!grade) {
            return res.status(404).send({ message: "Grade not found" });
        }
        res.status(200).send({ message: "Grade updated", grade });
    } catch (error) {
        next(error);
    }
};

const deleteGrade = async (req, res) => {
    const { id } = req.params;
    try {
        const grade = await GradeModel.findByIdAndDelete(id);
        if (!grade) {
            return res.status(404).send({ message: "Grade not found" });
        }
        res.status(200).send({ message: "Grade deleted successfully" });
    } catch (error) {
        next(error);
    }
};

module.exports = { createGrade, getGrades, updateGrade, deleteGrade };
