import React, {useState, useEffect} from "react";
import {fetchUserTickets} from "../store/actions"
import {axiosWithAuth} from "./axiosWithAuth.js";
import { useDispatch, connect } from "react-redux";
import Tickets from "./Tickets.js"

function Dashboard(props){
    // const [tickets, setTickets] = useState([])
    // const [error, setError] = useState('')
    const dispatch = useDispatch();
    const userid=localStorage.getItem('userId')
    const username = localStorage.getItem('username')
    useEffect(()=>{
        dispatch(fetchUserTickets())
    },[userid])
    // useEffect(()=>{
    //     axiosWithAuth()
    //     .get(`/tickets/users/${userid}`)
    //     .then(res=>{
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         setError(err.message)
    //     })
    // },[userid])
return(
    <div className="dashboard">
        <h2>Welcome, {username}!!</h2>
{props.error && (<div> You have no tickets. Click the (+) to get started.</div>)}
{props.tickets&&(<div className="ticketsfolder">
    <Tickets tickets={props.tickets}/>
</div>)}
    </div>
)
}


const mapStateToProps = state => {
    console.log('state', state)
    return {
        tickets: state.tickets,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchUserTickets}
)(Dashboard);