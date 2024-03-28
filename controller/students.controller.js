const { StudentModel } = require("../models/students.module");

const addStudent = async (req, res) => {
    const { email } = req.body;
    try {
        isStudentPresent = await StudentModel.findOne({ email: email });
        if (isStudentPresent) {
            return res.send(401).send({
                message: "Student is already present Please go for Login",
            });
        }
        const student = new StudentModel(req.body);
        await student.save();

        res.status(201).send({ message: "new student is SignUp" });
    } catch (error) {
        res.status(401).send(error.message);
    }
};

const getStudent = async (req, res) => {
    try {
        const student = await StudentModel.findOne();

        res.status(201).send({ message: "Getting All Students", student });
    } catch (error) {
        res.status(401).send(error.message);
    }
};

module.exports = { addStudent, getStudent };
