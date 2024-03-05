import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editUser,  getOneUser } from "../Service/Api";
import '../StyleSheets/Update.css';

const initialValue={
    username : "",
    age: "",
    occupation: "",
}

function Update(){
    
    const [user,setUser]=useState(initialValue);
    const {username,age,occupation} = user;

    const { id } = useParams();
    
    useEffect(()=>{
        loadUserData();
    },[]);

    const loadUserData = async ()=>{
        const response=await getOneUser(id);
        setUser(response.data);
    }

    const goTo = useNavigate();

    const onValueChange =(e)=>
    {
        console.log(e);
        console.log(e.target.value);
        setUser({...user ,[e.target.name] : e.target.value });
        console.log(user);
    }

    const save =async()=>{
        await editUser(id,user);
        goTo('/');
    }


   return(
    <> <br/><br/>
    <div className="Ubox-out">
    <div className="Ubox">
    <pre>
        <br/>
        <h1 className="title1">Update Your Data</h1>  <br/>  <br/>    
        <label>UserName    :  </label>
        <input className="in" onChange={(e)=>onValueChange(e)} name="username" value={username} /><br/><br/>
        <label>Age         :  </label>
        <input className="in" onChange={(e)=>onValueChange(e)} name="age" value={age}/><br/><br></br>
     <label>Occupation  :  </label>
        <input className="in" onChange={(e)=>onValueChange(e)} name="occupation" value={occupation} /><br/><br/><br/><br/>
     <button className="Ubtn" onClick={()=>save()}>Save</button> <button className="Ubtn" onClick={()=>goTo('/')}>Cancel</button>
    </pre><br/>
        </div>
  
      </div>  
    </>
    
   )
}

export default Update;