import React, {useState, useEffect} from "react";

import {axiosWithAuth} from "./axiosWithAuth.js";

function Dashboard(){
    const [tickets, setTickets] = useState([])
    const [error, setError] = useState('')
    const userid=localStorage.getItem('userId')
    const username = localStorage.getItem('username')
    useEffect(()=>{
        axiosWithAuth()
        .get(`/tickets/users/${userid}`)
        .then(res=>{
            console.log(res)
        })
        .catch(err => {
            console.log(err)
            setError(err.message)
        })
    },[userid])
return(
    <div className="dashboard">
        <h2>Welcome, {username}!!</h2>
{error && (<div> You have no tickets. Click the (+) to get started.</div>)}
    </div>
)
}

export default Dashboard;