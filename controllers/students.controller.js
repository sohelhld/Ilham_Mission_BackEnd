const { StudentModel } = require("../models");


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

const updateStudent = async (req, res) => {
	const { id } = req.params;
	const payload = req.body;
	try {
		const student = await StudentModel.findByIdAndUpdate(id, payload);
		res.status(201).send({ message: " Student is updated", student });
	} catch (error) {
		res.status(401).send(error.message);
	}
};

const deleteStudent = async (req, res) => {
	const { id } = req.params;
	const payload = req.body;
	try {
		const student = await StudentModel.findByIdAndDelete(id, payload);
		res.status(201).send({ message: " Student is deleted", student });
	} catch (error) {
		res.status(401).send(error.message);
	}
};

module.exports = { addStudent, getStudent, updateStudent, deleteStudent };
