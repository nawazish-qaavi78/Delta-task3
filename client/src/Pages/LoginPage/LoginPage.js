import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Login, getUserId } from '../../api';
import './LoginPage.css'

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await Login({
      email,
      password
    });
    navigate(`/profile`);
  }
  return (
    <div id='page'>
      <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' />
        </div>
        <div>
          <label>Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' />
        </div>
      </div>
        <button type="submit">Login</button>
      </form>
      <p>New User? <Link to='/register' >Register Here!</Link> </p>
    </div>
  )
}

export default LoginPage