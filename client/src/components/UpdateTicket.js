import React, {useState} from "react";
import {useDispatch} from 'react-redux';
import {updateTicket} from "../store/actions";
import {useHistory} from 'react-router-dom';

function UpdateTicket(props){
    const [ticket, setTicket] = useState({subject: "", ticket_text: ""})
    const dispatch = useDispatch();
    const history = useHistory();
    const inputChange = e => {
        e.preventDefault();
        setTicket({
            ...ticket,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div className="addticket">
            <form className="addticketform" onSubmit={(e) => {
                dispatch(addNewTicket(ticket)); history.push('/dashboard'); history.go(0)
            }}>
                <label htmlFor="subject">Subject</label><br/>
                <input 
                    type="text"
                    name="subject"
                    id="subject"
                    value={ticket.subject}
                    onChange={inputChange}
                    placeholder="subject"
                /><br />
                <label htmlFor="tickettext">How can we help?</label><br />
                <input
                    type="textbox"
                    name="ticket_text"
                    id="tickettext"
                    value={ticket.ticket_text}
                    onChange={inputChange}
                    placeholder="Please let us know how we can help"
                /> <br />
                <button>Submit Ticket</button>
            </form>
        </div>
    )
}

export default AddTicket;