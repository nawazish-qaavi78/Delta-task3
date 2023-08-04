import React from 'react'

import './ScorePage.css';
import { getScore } from '../../api';
import { useParams } from 'react-router-dom';

const ScorePage = () => {
    const {quizzId} = useParams();
    const score = getScore(quizzId);
  return (
    <div>
        <h1>{score}</h1>
        <p>quizzId: {quizzId}</p>
    </div>
  )
}

export default ScorePage