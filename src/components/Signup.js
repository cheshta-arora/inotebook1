import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom';
const Signup = (props) => {
  const [credentials, setcredentials] = useState({name:"",email:"",password:"",cpassword:""})
  
  let navigate = useNavigate();

  const handleSubmit= async(e)=>{
    e.preventDefault();
    const {name,email,password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body : JSON.stringify({name,email,password})
   });
   const json = await response.json();
   console.log(json);
   if(json.success){
    localStorage.setItem('token' , json.authtoken);
    navigate("/");
    props.showAlert("Account created successfully ", "success");

    }
   else{
    props.showAlert("Invalid details", "danger");
   }
 }

 const onChange = (e)=>{
  setcredentials({...credentials,[e.target.name]: e.target.value})
 } 
  return (
    <div className='container mt-3'>
    <h2>Login to continue to iNotebook</h2>
       <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">name</label>
    <input type="text" className="form-control" id="name"name='name'  onChange={onChange} aria-describedby="emailHelp"/>
  </div>
    <div className="mb-3">
    <label htmlFor="email" className="form-label">email</label>
    <input type="email" className="form-control" id="email" onChange={onChange}  name='email'/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" onChange={onChange}  id="password" name='password' minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">confirm Password</label>
    <input type="password" className="form-control"  onChange={onChange} id="cpassword" name='cpassword' minLength={5} required/>
  </div>

  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Signup
