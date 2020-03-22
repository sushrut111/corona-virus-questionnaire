import React, { useState, useEffect } from 'react';
import questions from '../api/questions';
function RadioQuestion(props) {

const {number, question, setAnswerToQuestion} = props;
const [answer, setAnswer] = useState(1);
const handleSelection = (e) => {
    setAnswer(e.target.value);
}
const handleSubmit = () => {
    setAnswerToQuestion(number, answer);
}
useEffect(()=>{
    setAnswer(1);
},[number])
return (
    <div>
    {question.options.map((option, i)=>{ return (
    <a className="panel-block" key={i}>
    <span className="panel-icon">
    <input type="radio" name="option" value={i}  onChange={handleSelection} checked={answer==i}></input>
    </span>
    {option}
    </a>)
    })
    }
    <div className="panel-block">
    <button className="button is-link is-outlined is-fullwidth" onClick={handleSubmit}>
    Next
    </button>
    </div>
    </div>
    );
}

export default RadioQuestion;
