const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRouter = require("./routes/auth");
const studentRouter = require("./routes/student");
require("dotenv").config();

const PORT = 3005;

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Dawood:Dqjan292002@schoolmanagementsystem.scyesbi.mongodb.net/SchoolSystem?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

app.use("/admin", authRouter);
app.use('/student', studentRouter);

app.use(express.static(path.join(__dirname,'../client/dist')));

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../client/dist/index.html'));
})

app.listen(process.env.PORT || PORT ,()=>{
    console.log(`Server is running on Port ${PORT}`)
})