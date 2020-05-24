import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from './axiosWithAuth';


function Tickets(props){
const tickets = props.tickets
return(
    <div className="yourtickets">
        {tickets.map(ticket => {
            return (<div className="yourticketsind">
            <h3>{ticket.subject}</h3>
            <p>{ticket.ticket_text}</p>
            <p>Status: {ticket.status}</p>
            <button>Update</button>
            <button>Delete</button>
            </div>
            )
        })
        }
    </div>
)
}

export default Tickets;