import React, { useState } from 'react'

const QnA = ({index,updatePage, creating}) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    
    const handleQnA = ()=>{
        if(creating){
            updatePage({question, answer, index});
        } else{
            updatePage({answer,index});
        }
    }
  return (
    <div>
        <label>Question</label>
        <input type='text' name='question' value={question} onChange={(e)=>{
            setQuestion(e.target.value);
            handleQnA();
        }} />
        <label>Answer</label>
        <input type='text' name='Answer' value={answer} onChange={(e)=>{
            setAnswer(e.target.value);
            handleQnA();
        }} />
    </div>
  )
}

export default QnA