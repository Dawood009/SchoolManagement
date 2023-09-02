import {Link , useNavigate} from 'react-router-dom'

export const Navbar = () =>{

    const navigate = useNavigate();

    const logout = () =>{
        window.localStorage.clear();
        navigate("/login");
    }
    
    return (
        <div className='navbar'>
            <Link to="/"><h1>Home</h1></Link>
            <Link to="/add-student"><h1>Add Student</h1></Link>
            {!localStorage.key("userID") ? 
            (<Link to="/login"><h1>Login</h1></Link>) :
            (<button className='logout-btn' onClick={logout}>Logout</button>)
    }
        </div>
    )
}