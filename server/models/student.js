const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    rollno:{
        type: Number,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    }
});

const StudentModel = mongoose.model("Students", StudentSchema);

module.exports = StudentModel;