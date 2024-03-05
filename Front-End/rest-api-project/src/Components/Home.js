import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers,deleteUser } from "../Service/Api";
import '../StyleSheets/Home.css';

function HomeComponent(){

    const goto = useNavigate();
    const next = ()=>goto('/create');
   

    const [user,setUser] =useState([]);
    useEffect(()=>{
        getUsers();
    },[])

    const getUsers =async()=>{
        const response = await getAllUsers();
        console.log(response);
        setUser(response.data);
    }

    const remove = async(id)=>{
        await deleteUser(id);
        getUsers();
    }
    
     
    return(
        <> 
        <table className="box">
           {
             user.map((data)=>(
                <tr>
                    <pre className="pre">
                    <th>Emp-ID : {data.id}</th><br/>
                    <th>Name   : {data.username}</th><br/>
                    <th>Age    : {data.age}</th><br/>
                    <th>Role   : {data.occupation}</th><br/>
                    <th><br/>
                        <button className="btn" onClick={()=>goto(`/update/${data.id}`)}>Update</button> 
                        <button className="btn" onClick={()=>{if(window.confirm(`Are you sure, you want to delete ${data.username} details ? `))remove(data.id);}}>Delete</button>
                    </th>
                    </pre>
                </tr>
             ))
           }
           <tr><button className="btn-2" type="button" onClick={next}>+</button></tr>
        </table>
        
        

        
   
        </>
    )
}



export default HomeComponent;