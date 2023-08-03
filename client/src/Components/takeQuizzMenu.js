import React from 'react'
import { useNavigate } from 'react-router-dom';

const TakeQuizzMenu = (props) => {
  const navigate = useNavigate();

  const handleClick = (e)=>{
    e.preventDefault();
    navigate(`/${props.id}`);
  }

  return (
    <div>
      <h2>{props.title}</h2>
      <button onClick={handleClick} >Take Quizz</button>
    </div>
  )
}

export default TakeQuizzMenu;