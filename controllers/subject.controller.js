const SubjectModel = require("../models/subject.model");

const createSubject = async (req, res) => {
    const { name, subjectCode } = req.body;
    try {
        const isSubjectPresent = await SubjectModel.findOne({
            name,
            subjectCode,
        });
        if (isSubjectPresent)
            return res.status(401).send({ message: " subject already exist" });
        const subject = new SubjectModel({ name, subjectCode });
        await subject.save();
        res.status(201).send({ message: "New subject created", subject });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getSubjects = async (req, res) => {
    try {
        const subjects = await SubjectModel.find();
        res.status(200).send({ message: "Getting all subjects", subjects });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const updateSubject = async (req, res) => {
    const { id } = req.params;
    const { name, subjectCode } = req.body;
    try {
        const subject = await SubjectModel.findByIdAndUpdate(
            id,
            { name, subjectCode },
            { new: true }
        );
        if (!subject) {
            return res.status(404).send({ message: "Subject not found" });
        }
        res.status(200).send({ message: "Subject updated", subject });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const deleteSubject = async (req, res) => {
    const { id } = req.params;
    try {
        const subject = await SubjectModel.findByIdAndDelete(id);
        if (!subject) {
            return res.status(404).send({ message: "Subject not found" });
        }
        res.status(200).send({ message: "Subject deleted successfully" });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

module.exports = { createSubject, getSubjects, updateSubject, deleteSubject };
