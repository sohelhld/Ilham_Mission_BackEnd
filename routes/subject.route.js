const express = require("express");
const {
    deleteSubject,
    createSubject,
    getSubjects,
    updateSubject,
} = require("../controllers");

const subjectRouter = express.Router();

subjectRouter.get("/getSubjects", getSubjects);
subjectRouter.post("/createSubject", createSubject);
subjectRouter.patch("/updateSubject/:id", updateSubject);
subjectRouter.delete("/deleteSubject/:id", deleteSubject);

module.exports = subjectRouter;
