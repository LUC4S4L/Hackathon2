import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchLogin } from '../services/api';

const Login = () => {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate()


    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res=await fetchLogin(username,password);
            if(res.status===200){
                localStorage.setItem('token',res.token);
                navigate('/items');
            }
        }catch(error){
            console.log('Login failed: ',error);
        }
    }

    const handleRegisterRedirect=()=>{
        navigate('/register');
    }
  return (
    
    <>
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input onChange={(e)=>{setUsername(e.target.value)}} id="username" required/>
        <label htmlFor='password'>Password</label>
        <input onChange={(e)=>{setPassword(e.target.value)}} type="password" id="username" required/>
        <button type="submit">Login</button>
        <button type="button" onClick={handleRegisterRedirect}>Don't have an account? Register</button>
    </form>
    </>
  )
}

export default Login