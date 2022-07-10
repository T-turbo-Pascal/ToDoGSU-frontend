//const backendUrl = 'https://1983-151-249-164-92.eu.ngrok.io/';
import axios from 'axios';


export const Login = (username: string, password: string) => {
    return axios.post(backendUrl + 'login', {
        user: {
            username: username,
            password: password
        }
    })
}

