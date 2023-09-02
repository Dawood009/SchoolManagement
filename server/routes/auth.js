const express = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AdminModel = require("../models/admin");
const router = express.Router();


router.post("/signup", async (req,res) => {
    const user = await AdminModel.findOne({username})
    if(user){
        return res.status(400).json({message:""})
    }
    const hashedPassword = bcrypt.hashSync("admin123",12)
    const admin = new AdminModel({username: "admin", password: hashedPassword})
    try{
        await admin.save();
        res.send("admin created")

    }
    catch(err){
        res.send(err)
    }
})

router.post("/login",async (req,res)=>{
    const {username , password} = req.body;
    const user = await AdminModel.findOne({username});
    if(!user){
        return( 
        console.log("Invalid Username or Password")
        (res.json({message: "Invalid Username or Password"}))
        );
       
    }
    const isValidPassword = await bcrypt.compare(password,user.password)
    if(!isValidPassword){
        return console.log("Invalid Password");
        
    }
    const token = jwt.sign({id:user._id},"secretadmin")
    res.cookie('user',token ,{httpOnly: true});
    res.json({userID:user._id , token})

})


module.exports = router;