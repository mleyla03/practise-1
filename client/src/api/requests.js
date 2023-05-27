import { BASE_URL } from "./base_url";
import axios from "axios"
export const getAllSecurity= async(names)=>{
    let Practice;
    let URL
    if(!names){
        URL = BASE_URL+"/ports"
    }
    else{
        URL = BASE_URL+`/ports/?names=${names}`
    }
    await axios.get(URL)
    .then(res=>{
        Practice=res.data
    })
    return Practice
    
}
export const getSecurityById= async(id)=>{
    let OnePractice;
    await axios.get(`${BASE_URL}/ports/${id}`)
    .then(res=>{
        OnePractice=res.data
    })
    return OnePractice
}
export const deleted = async(id)=>{
    let message;
    await axios.delete(`${BASE_URL}/ports/${id}`).then(res=>{
        message = res.data
    })
    return message
}
export const posted=(payload)=>{
    axios.post(`${BASE_URL}/ports`,payload)
}
export const editing=(id,payload)=>{
    axios.put(`${BASE_URL}/ports${id}`,payload)
}
