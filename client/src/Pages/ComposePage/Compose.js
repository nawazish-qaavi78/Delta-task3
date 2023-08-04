import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Compose.css';
import QnA from '../../Components/QnA';
import { postQuizz } from '../../api';

const Compose = () => {

  const [questionnaire, setquestionnaire] = useState(Array.apply(null, Array(1))
    .map(function () { }));
  const [title, setTitle] = useState("");

  const navigate = useNavigate();


  const addQnA = (qnaData)=>{
    const {question, answer, index} = qnaData;
    setquestionnaire(oldQnA => {
      return [
        ...oldQnA.slice(0, index),
        {question, answer},
        ...oldQnA.slice(index + 1)
      ]
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postQuizz({title, questionnaire});
    navigate('/profile');
  }


  return (
    <div>
      <h1>Compose</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        {questionnaire.map((qna, index) => {
          return <QnA updatePage={addQnA} key={index} index={index} creating={true} />
        })}

        <button type='submit'>Post</button>
      </form>

      <button onClick={() => setquestionnaire(oldArray => [...oldArray, null])}>+</button>
    </div>
  )
}

export default Compose
