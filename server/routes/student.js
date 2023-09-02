const express = require('express');
const StudentModel = require('../models/student')

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        const students = await StudentModel.find({})
        res.status(200).json(students)
    } catch (error) {
        res.status(500).json(error)
    }
})





router.post("/new-student", async (req, res) => {
    const student =
    {
        name: req.body.name,
        class: req.body.class,
        rollno: req.body.rollno,
        age: req.body.age,
        gender: req.body.gender
    }
    const newStudent = await StudentModel.create(student)
    console.log({ ...student })
    try {
        await newStudent.save();
    }
    catch (error) {
        res.status(500).json(error)
    }
})




module.exports = router;
