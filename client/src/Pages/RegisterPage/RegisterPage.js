import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Register } from '../../api';
import './RegisterPage.css';

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await Register({
      email,
      password,
      name
    });
    navigate('/profile');
  }
  return (
    <div id='page'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} type='text' />
        </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' />
        </div>
        <div>
          <label>Password:</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type='password' />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to='/login' >Login</Link> </p>
    </div>
  )
}

export default RegisterPage