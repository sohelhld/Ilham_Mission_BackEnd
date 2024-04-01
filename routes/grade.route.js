const express = require("express");
const gradeRouter = express.Router();
const {
    createGrade,
    getGrades,
    updateGrade,
    deleteGrade,
} = require("../controllers/index");

gradeRouter.post("/createGrade", createGrade);
gradeRouter.get("/getGrades", getGrades);
gradeRouter.put("/updateGrade/:id", updateGrade);
gradeRouter.delete("/deleteGrade/:id", deleteGrade);

module.exports = gradeRouter;
