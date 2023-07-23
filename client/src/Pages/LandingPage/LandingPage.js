import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div id='page'>
      <h1 className='title'>Quizz Hub</h1>
      <div className='button-div'>
        <button><Link to='/login' >Login</Link></button>
        <button><Link to='/register' >Register</Link></button>
      </div>
    </div>
  )
}

export default LandingPage