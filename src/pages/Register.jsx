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
            if(res.status===200){
                navigate('/login');
            }
        }catch(error){
            console.log('Registration failed: ',error);
        }
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
        <button>Register</button>
    </form>
    </>
  )
}

export default Register