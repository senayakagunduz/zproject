import { encryptedLocalStorage } from "./encrypt-storage"

const authHeader = () => { 
    const token=encryptedLocalStorage.getItem("token");
    console.log(token);
    let header={};
    if(token){
        header={Authorization:`Bearer ${token}`}
    }

    return header;
 }
 export default authHeader;