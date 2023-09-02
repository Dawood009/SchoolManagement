import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export const AddStudent = () =>{

    const [bio, setBio] = useState({
        name:"",
        class:"",
        rollno: 0,
        age: 0,
        gender:"Male" 
    })

    const navigate = useNavigate();

    const handleChange = (name,value) =>{
        setBio((pre)=>({...pre,[name]:value}))
    }
    
    const handleSubmit = async (event)=>{
        event.preventDefault();

        try {
           const student = await axios.post("http://localhost:3005/student/new-student",
            {...bio});
            alert("student added");
            navigate("/");
            console.log(student);
           
        } catch (error) {
            console.log(error)
        }
        
    }
    
    const isLogin=()=>{
        navigate("/login")
    }

    


    return (
        <div className="addStudent">
            {!localStorage.key("userID") ? (<h1>Please Login First!</h1>) : (<h2>Add New Student!</h2>)}
        <div className="student-form">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name"><b>Student's Name :</b></label>
                    <input type="text" id="name" name="name" value={bio.name} onChange={(e)=>{handleChange("name",e.target.value)}}/>
                    <label htmlFor="class"><b>Class :</b></label>
                    <input type="text" id="class"  name="class" value={bio.class} onChange={(e)=>{handleChange("class",e.target.value)}}/>
                    <label htmlFor="rollno"><b>Roll No. :</b></label>
                    <input type="number" id="rollno" name="rollno"  value={bio.rollno} onChange={(e)=>{handleChange("rollno",e.target.value)}}/>
                    <label htmlFor="age"><b>Age :</b></label>
                    <input type="number" id="age"  name="age" value={bio.age} onChange={(e)=>{handleChange("age",e.target.value)}}/>
                    <label htmlFor="gender"><b>Gender :</b></label>
                    <select id="gender" name="gender" value={bio.gender} onChange={(e)=>{handleChange("gender",e.target.value)}}>
                        <option >Male</option>
                        <option >Female</option>
                    </select>
                    {!localStorage.key("userID") ? (<button className="isLogin" onClick={isLogin}>Login First</button>) : (<button type="submit"  className="add-btn">Add New Student</button>)}
                </form>
        </div>
        </div>
    )

}