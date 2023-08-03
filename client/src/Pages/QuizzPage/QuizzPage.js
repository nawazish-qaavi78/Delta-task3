import React, { useState } from 'react'
import './quizzPage.css';
import { getQuizz } from '../../api';

const QuizzPage = (props) => {
    const [inputAnswers, setInputAnswers] = useState([]);
    const { title, questionnaire } = getQuizz(props.id);


    const handleAnswerChange = (e)=>{
        write logic to change the answer at given index
    }

    return (
        <div>
            <h1>{title}</h1>
            {questionnaire.map((questionary, index) => {
            keep this stuff in form so that we can send it to check
                <div>
                    <p>{questionary.question}</p>
                    <input type='text' name={index} value={inputAnswers[index]} onChange={handleAnswerChange} />
                </div>
            })}
        </div>
    )
}

export default QuizzPage