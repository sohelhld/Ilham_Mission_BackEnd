const { TeacherModel } = require("../models");

async function createTeacher(req, res) {
    try {
        const { name, email, department, classAssign } = req.body;
        if (!name || !email || !department) {
            return res
                .status(400)
                .json({ message: "Name, email, and department are required." });
        }
        const existingTeacher = await TeacherModel.findOne({ email });
        if (existingTeacher) {
            return res.status(400).json({ message: "Email already exists." });
        }
        const newTeacher = new TeacherModel({
            name,
            email,
            department,
            classAssign,
        });
        await newTeacher.save();
        res.status(201).json(newTeacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getAllTeachers(req, res) {
    try {
        const teachers = await TeacherModel.find();
        res.status(201).json(teachers);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function getTeacherById(req, res) {
    res.status(201).json(res.teacher);
}

async function updateTeacher(req, res) {
    try {
        if (req.body.name != null) {
            res.teacher.name = req.body.name;
        }
        if (req.body.email != null) {
            res.teacher.email = req.body.email;
        }
        if (req.body.department != null) {
            res.teacher.department = req.body.department;
        }
        if (req.body.classAssign != null) {
            res.teacher.classAssign = req.body.classAssign;
        }
        await res.teacher.save();
        res.status(201).json(res.teacher);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteTeacher(req, res) {
    const { id } = req.params;
    try {
        const data = await TeacherModel.findByIdAndDelete(id);
        res.status(201).json({ message: "Teacher deleted", data });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
};
