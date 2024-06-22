import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchRegister } from '../services/api'

const Register = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [role,setRole]=useState('');
    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await fetchRegister(username,password,role);
            if(res){
                console.log('Registration Successful!');
                navigate('/login');
            }
        }catch(error){
            console.log('Registration failed: ',error);
        }
    }
    const handleLoginRedirect=()=>{
        navigate('/login');
    }

  return (
    <>
    <h1>Register</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input onChange={(e)=>{setUsername(e.target.value)}} id="username" required/>
        <label htmlFor='password'>Password</label>
        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="password" required/>
        <label htmlFor='role'>Role: Client or Admin</label>
        <input onChange={(e)=>{setRole(e.target.value)}} id="role" required/>
        <button type="submit">Register</button>
        <button type="button" onClick={handleLoginRedirect}>Go to Login</button>
    </form>
    </>
  )
}

export default Register