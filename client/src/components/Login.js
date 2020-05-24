import React, {useState} from "react";
import axios from "axios";
import {useHistory, Link} from "react-router-dom";
import {useDispatch} from 'react-redux';

function Login(){
    const [user, setUser] = useState({email: "", password: ""})
    const history = useHistory();
    const dispatch = useDispatch();
    const inputChange = e => {
        e.preventDefault();
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const onLogin = e => {
        e.preventDefault();
        axios
            .post('https://bwdevdesk3.herokuapp.com/auth/login', user)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                localStorage.setItem('userId', res.data.user.id)
                localStorage.setItem('username', res.data.user.name)
                history.push('/dashboard')
                dispatch({type: 'LOGGED_IN'})
            })
            .catch(error => {
                console.log('login error',error)})
    }

    return(
        <div className="loginform">
            <form className="loginn" onSubmit={onLogin}>
                <label htmlFor="email">Email</label><br/>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={inputChange}
                /><br/>
                <label htmlFor="password">Password</label><br/>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={inputChange}
                />
                <button className="homebuttons">Login</button>
                <p>Already have an account?<br/>
                <Link className="switch" to="/register">Register Here </Link></p>
            </form>
        </div>
    )
}

export default Login;