import React, { useState } from 'react';
import questions from '../api/questions';
function TextQuestion(props) {
const {number, question, setAnswerToQuestion, showToast} = props;
const [answer, setAnswer] = useState("");
const handleSelection = (e) => {
    setAnswer(e.target.value);
}

const handleSubmit = () => {

    if(question.private){
        if(answer==""){
            setAnswerToQuestion(number, "anonymous/skipped");

        }
        else
        setAnswerToQuestion(number, answer);
    }
    else{
        showToast("Please enter the answer to the question.")            

    }
}
return (
    <div>
    <a className="panel-block">
    <span className="panel-icon">
    <i className="fas fa-arrow-right" ></i>
    </span>
    <input className="input" type="text" name="option" value={answer} onChange={handleSelection} ></input>

    </a>
    <div className="panel-block">
    <button className="button is-link is-outlined is-fullwidth" onClick={handleSubmit}>
    Next
    </button>
    </div>
    </div>

    );
}

export default TextQuestion;
