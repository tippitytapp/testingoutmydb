import {axiosWithAuth} from '../../components/axiosWithAuth.js'

export const fetchUserTickets = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_TICKETS'})
        axiosWithAuth()
        .get(`/tickets/users/${localStorage.getItem('userId')}`)
        .then(tickets => {
            dispatch({type: 'FETCH_TICKETS_SUCCESS', payload: tickets})
        })
        .catch(error => {
            dispatch({type: 'FETCH_TICKETS_FAILURE', payload: error.message})
        })
    }
}

export const fetchAllTickets = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_TICKETS'})
        axiosWithAuth()
        .get('/tickets')
        .then(tickets => {
            dispatch({type: 'FETCH_TICKETS_SUCCESS', payload: tickets})
        })
        .catch(error => {
            dispatch({type: 'FETCH_TICKETS_FAILURE', payload: error.message})
        })
    }
}

export const addNewTicket = (ticket) => {
    return dispatch => {
        dispatch({type: 'ADD_TICKET_START'})
        axiosWithAuth()
        .post('/tickets', ticket)
        .then(tickets => {
            dispatch({type: 'ADD_TICKET_SUCCESS'})
            console.log(tickets)
        })
        .catch(error => {
            dispatch({type: 'ADD_TICKET_FAILURE', payload: error.message})
        })
    }
}

export const updateTicket = (updates) => {
    return dispatch => {
        dispatch({type: 'UPDATE_START'})
        axiosWithAuth()
        .put('/tickets/')
    }
}