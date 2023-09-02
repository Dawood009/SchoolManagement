import { useEffect, useState } from "react"
import axios from 'axios'

export const Home = () =>{

    const [listOfStudents,setListOfStudents] = useState([])

    useEffect(()=>{
        const allStudents = async () =>{
            try {
                const response = await axios.get("http://localhost:3005/student")
                setListOfStudents(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        allStudents();
    },[])

    return (
        <div className="students">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Student's Name</th>
                            <th>Class</th>
                            <th>Roll No.</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    {localStorage.key("userID") ?
                    (<tbody>
                        {listOfStudents.map((student,i)=>{
                            return (
                                <tr key={i}>
                                    <td>{student.name}</td>
                                    <td>{student.class}</td>
                                    <td>{student.rollno}</td>
                                    <td>{student.age}</td>
                                    <td>{student.gender}</td>
                                </tr>
                            )
                        })}
                    </tbody>) : (<tbody></tbody>) }
                </table>
            </div>
        </div>
    )
}