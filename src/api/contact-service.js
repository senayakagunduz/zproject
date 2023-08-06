import axios from "axios"
import {settings} from "../helpers/settings"
import authHeader from "../helpers/functions/auth-header";

const API_URL= settings.apiURL;
//USER ENDPOINTS
export const sendMessage=(message)=>{
    axios.post(`${API_URL}/contactmessage/visitors`,message);
}
//ADMIN ENDPOINTS
export const getMessagesByPage=(page=0,size=20,sort="id",direction="DESC")=>{
    return axios.get(`${API_URL}/contactmessage/pages?page=${page}&size=${size}&sort=${sort}&direction=${direction}`,
    {headers: authHeader(),})
}

export const getMessage=(id)=>{
    return axios.get(`${API_URL}/contactmessage/${id}`,
    {headers: authHeader()})
}
export const deleteMessage=(id)=>{
    return axios.delete(`${API_URL}/contactmessage/${id}`,
    {headers: authHeader()})
}