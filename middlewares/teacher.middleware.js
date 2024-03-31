const { TeacherModel } = require("../models");

async function getTeacher(req, res, next) {
	let teacher;
	try {
		teacher = await TeacherModel.findById(req.params.id);
		if (teacher == null) {
			return res.status(404).json({ message: "Teacher not found" });
		}
	} catch (error) {
		return res.status(500).json({ message: error.message });
	}

	res.teacher = teacher;
	next();
}

module.exports = { getTeacher };
