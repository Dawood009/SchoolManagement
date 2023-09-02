import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export const Login = () =>{
    
    
    const [creds,setCreds] = useState({
        username:"",
        password:""
    })

    const navigate = useNavigate();
    
    const handleChange = (name , value) =>{
        setCreds((pre)=>({...pre, [name]:value}) )
    }
    

    const handleSubmit = async (event) =>{
        event.preventDefault();

        try {
            const user = await axios.post("http://localhost:3005/admin/login",
            {...creds});
            
            localStorage.setItem("userID",user.data.userID)
            navigate("/")
            alert("Login Successfully!")
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='login'>
            <div className='login-form'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id='username' name='username' value={creds.username} onChange={(event)=>{handleChange("username",event.target.value)}}/>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id='password' name='password' value={creds.password} onChange={(event)=>{handleChange("password",event.target.value)}}/>
                    <button type='submit' className='login-btn'>Login</button>
                </form>
            </div>
        </div>
    )

}