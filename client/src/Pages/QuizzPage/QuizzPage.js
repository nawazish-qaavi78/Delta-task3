import React, { useState } from 'react'
import './quizzPage.css';
import { checkAnswers, getQuizz, saveScore } from '../../api';
import QnA from '../../Components/QnA';
import { useNavigate } from 'react-router-dom';

const QuizzPage = (props) => {
    const { title, questionnaire } = getQuizz(props.id);
    const [inputAnswers, setInputAnswers] = useState(Array.apply(null, Array(questionnaire.length))
    .map(function () { }));

    const navigate = useNavigate();
    

    const addAnswer = (answerData)=>{
        const {answer, index} = answerData;
        setInputAnswers(oldAns=>{
            return [
                ...oldAns.slice(0,index),
                {answer},
                ...oldAns.slice(index+1)
            ]
        });
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        const {score} = checkAnswers(inputAnswers, props.id);
        saveScore(score,props.id);
        navigate(`/:quizzId/score`);
    }

    return (
        <div>
            <h1>{title}</h1>
            <form onSubmit={handleSubmit}>
            {questionnaire.map((questionary, index) => {
                <QnA creating={false} index={index} key={index} updatePage={addAnswer} />
            })}
            <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default QuizzPage
                // <div>
                //     {/* <p>{questionary.question}</p>
                //     <input type='text' name={index} value={inputAnswers[index]} onChange={handleAnswerChange} /> */}
                // </div>