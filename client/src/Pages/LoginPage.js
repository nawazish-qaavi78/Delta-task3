import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' />
        </div>
        <div>
          <label>Password</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>New User? <Link to='/register' >Register Here!</Link> </p>
    </div>
  )
}

export default LoginPage