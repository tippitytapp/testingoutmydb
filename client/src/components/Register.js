import React, {useState} from "react";
import axios from "axios";
import {useHistory, Link} from 'react-router-dom';

function Register(){
const [user, setUser] = useState({})
const [student, setStudent] = useState(false)
const [helper, setHelper] = useState(false)
const history = useHistory();

const onSubmit = (event) => {
    event.preventDefault();
    const newUser = {
                    name: user.name, 
                    email:user.email,
                    password:user.password,
                    cohort: user.cohort,
                    student: student, 
                    helper: helper
                    }
    axios
        .post('https://bwdevdesk3.herokuapp.com/auth/register', newUser)
        .then(res => {
            history.push('/login')
        })
        .catch(error => {
            console.log('register error', error)
        })
}

const onInputChange = event => {
    event.preventDefault()
    setUser({
        ...user,
        [event.target.name]: event.target.value
    })
}

const isStudent=event => {
    setStudent(!student)
}
const isHelper = event => {
    setHelper(!helper)
}


return(
    <div className="registerform">
        <form className="registerr" onSubmit={onSubmit}>
            <label 
                htmlFor="name"
                >Name
            </label>
            <input 
                type="text" 
                id="name"
                name="name"
                placeholder="Name"
                value={user.name}
                onChange={onInputChange}
            /><br />
            <label 
                htmlFor="email"
                >Email (this will be your username)
            </label>
            <input 
                type="email" 
                id="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={onInputChange}
            /><br/>
            <label 
                htmlFor="password"
                >Password
            </label>
            <input 
                type="password" 
                id="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={onInputChange}
            /><br />
            <label 
                htmlFor="cohort"
                >Cohort
            </label>
            <input 
                type="text" 
                id="cohort"
                name="cohort"
                placeholder="Cohort"
                value={user.cohort}
                onChange={onInputChange}
            /><br />
            <div className="checks">
                <div className="boxes">
            <label 
                htmlFor="student"
                >Student
            </label>
            <input 
                className="check"
                type="checkbox" 
                id="student"
                name="student"
                value={student}
                onChange={isStudent}
            />
            </div>
            <div className="boxes">
            <label 
                htmlFor="helper"
                >Helper
            </label>
            <input 
                className="check"
                type="checkbox" 
                id="helper"
                name="helper"
                value={helper}
                onChange={isHelper}
            />
            </div></div><br />
            <button className="homebuttons">Register</button>
            <p>Already have an account?<br/>
                <Link className="switch" to="/login">Login Here </Link></p>
        </form>

    </div>
)

}

export default Register;