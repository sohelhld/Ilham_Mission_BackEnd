const {
    createTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
} = require("./teachers.controller");
const {
    createSubject,
    getSubjects,
    updateSubject,
    deleteSubject,
} = require("./subject.controller");
module.exports = {
    createTeacher,
    getAllTeachers,
    getTeacherById,
    updateTeacher,
    deleteTeacher,
    createSubject,
    getSubjects,
    updateSubject,
    deleteSubject,
};
