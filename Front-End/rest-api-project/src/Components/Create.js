import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../Service/Api";
import "../StyleSheets/Create.css";

const initialValue={
    username:"",
    age:"",
    occupation:"",

}

function CreateComponent(){
    const goTo= useNavigate();
    const next = ()=>goTo('/');
   

    const [user,setUser]=useState(initialValue);
    const {username,age,occupation}=user;

    const onValueChange = (e) =>
    {
        console.log(e);
        console.log(e.target.value);
        setUser({...user, [e.target.name] : e.target.value});
        console.log(user);
    }

    const add = async()=>{
        await addUser(user);
        goTo('/');
    }

    return(<div className="Ubox-out2">
        <div className="Ubox2"><br/><br/>
        <h1 className="title2">Create Your Data</h1><br/>
        
          <pre>
            <label>UserName   :  </label>
            <input className="in2" onChange={(e)=>onValueChange(e)} name="username" value={username}/><br></br><br/>
            <label>Age        :  </label>
            <input className="in2" onChange={(e)=>onValueChange(e)} name="age" value={age}/><br></br><br/>
            <label>Occupation :  </label>
            <input className="in2" onChange={(e)=>onValueChange(e)} name="occupation" value={occupation}/><br></br><br/>
            <button className="Ubtn2" onClick={()=>add()}>Save</button>
            <button className="Ubtn2" type="button" onClick={next} >Cancel</button>
        </pre>
        </div>
        </div>
           
    )
}

export default CreateComponent;