const initialState = {
    isLoggedIn: false,
    isLoading: false,
    error: "",
    tickets:[],
}

export const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGGED_IN':
            return {
                ...state,
                isLoggedIn: true
            }
        case 'FETCHING_TICKETS':
            return{
                ...state,
                isLoading: true
            }
        case 'FETCH_TICKETS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                tickets: action.payload.data.data,
                error: ""
            }
        case 'FETCH_TICKETS_FAILURE':
            return{
                ...state,
                isLoading: false,
                error: action.payload,
                tickets: []
            }
        case 'ADD_TICKET_START':
            return{
                ...state,
                isLoading: true,
                error: "",
                tickets: []
            }
        case 'ADD_TICKET_SUCCESS':
            return{
                ...state,
                isLoading: false,
                error: "",
                tickets: []
            }
        case 'ADD_TICKETS_FAILURE':
            return{
                ...state,
                isLoading: false,
                error: action.payload,
                tickets: []
            }
        default:
            return state;
    }
}