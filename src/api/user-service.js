import axios from "axios"
import {settings} from "../helpers/settings"
import authHeader from "../helpers/functions/auth-header";

const API_URL=settings.apiURL;

export const register=(user)=>{
    return axios.post(`${API_URL}/register`,user);
}

export const login=(credential)=>{
    return axios.post(`${API_URL}/login`,credential);
}

export const getUser=()=>{
    return axios.get(`${API_URL}/user`,{headers:authHeader()});
}
export const updateUser=(user)=>{
    return axios.put(`${API_URL}/user`,user,{headers:authHeader()});  
}

//swagger'da  user/auth endpointine bağlanarak update password yapıcaz 
export const updatePassword=(credential)=>{
    return axios.patch(`${API_URL}/user/auth`,credential,{headers:authHeader()});  
}
