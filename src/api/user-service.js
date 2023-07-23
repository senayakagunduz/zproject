import axios from "axios"
import {settings} from "../helpers/settings"

const API_URL=settings.apiURL;

export const register=(user)=>{
    return axios.post(`${API_URL}/register`,user);
}

