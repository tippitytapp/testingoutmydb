import React, {useState, useEffect} from 'react';
import {fetchAllTickets} from '../store/actions';
import {connect, useDispatch} from 'react-redux';

function TicketsQueue (props){
    const tickets = props.tickets;
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchAllTickets())  
    },[])
    return(
        <div>
            {props.isLoading&&(<h1 className="loading">LOADING TICKETS</h1>)}
            {props.tickets&& (<>            <h2>All Tickets</h2>
            <div className="indTickets">
            {props.tickets.map(ticket => {
                return (<div className="indTicket">
                <p>Subject: {ticket.subject}</p>
                <p>Text: {ticket.ticket_text}</p>
                <p>Submitted By: {ticket.name}</p>
                <p>Status: {ticket.status}</p></div>)
            })}
                </div>
                </>
            )}
        </div>

    )
}

const mapStateToProps = state => {
    return {
        tickets: state.tickets,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    {fetchAllTickets}
)(TicketsQueue)
