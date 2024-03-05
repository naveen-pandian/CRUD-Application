import axios from "axios";

const url = "http://localhost:8080/";

export const getAllUsers = async()=>{
    return await axios.get(`${url}users`);
}

export const addUser = async(user)=>{
    return await axios.post(`${url}save`,user);
}

export const getOneUser = async(id)=>{
    return await axios.get(`${url}users/${id}`)
}

export const editUser = async(id,user)=>{
    return await axios.put(`${url}update/${id}`,user)
}

export const deleteUser=async(id)=>{
    return await axios.delete(`${url}delete/${id}`)
}
