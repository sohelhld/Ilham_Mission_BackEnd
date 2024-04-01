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
const {
    createGrade,
    getGrades,
    updateGrade,
    deleteGrade,
} = require("./grade.controller");
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
    createGrade,
    getGrades,
    updateGrade,
    deleteGrade,
};
