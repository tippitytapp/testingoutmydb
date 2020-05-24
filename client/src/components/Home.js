import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div className="home">
            <div className="register">
                <p>Looking for an easy way to keep track and manage your help desk tickets?</p>
                <p>Click register to get started</p>
                <button className="homebuttons"><Link to="/register">Register</Link></button>
            </div>
            <div className="login">
                <p>Already have an account?</p>
                <p>Click login to return to your DevDesk</p>
                <button className="homebuttons"><Link to="/login">Login</Link></button>
            </div>
        </div>
    )
}

export default Home;