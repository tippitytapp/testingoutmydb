import axios from "axios";

export const axiosWithAuth=()=>{
    return axios.create({
        headers: {
            authorization: localStorage.getItem('token')
        },
        baseURL: 'https://bwdevdesk3.herokuapp.com/'
    })
}