import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type='text' />
      </div>
        <div>
          <label>Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' />
        </div>
        <div>
          <label>Password:</label>
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to='/login' >Login</Link> </p>
    </div>
  )
}

export default RegisterPage