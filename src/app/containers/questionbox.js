import React, { useState, useEffect } from 'react';
import RadioQuestion from '../components/radioQuestion';
import TextQuestion from '../components/textQuestion';
import 'bulma/css/bulma.css';

function Questionbox(props) {
  const {
    showToast, content, language, handleTransition, addAnswer,
  } = props;
  const questions = content;
  const [number, setNumber] = useState(0);
  const [isobjective, setQuestionType] = useState(questions[0].objective);
  const totalquestions = questions.length;
  const handleQuestionChange = () => {
    if (totalquestions > number + 1) {
      setQuestionType(questions[number + 1].objective);
      setNumber(number + 1);
    } else {
      handleTransition();
    }
  };
  useEffect(() => {
    setNumber(0);
  }, [language]);

  const setAnswerToQuestion = (qnumber, answer) => {
    addAnswer({ question: qnumber, answer });
    handleQuestionChange();
  };
  return (
    <div>
      <div className="box is-small">
        <article className="panel is-danger">
          <p className="panel-heading">
            Question
            {' '}
            {number + 1}
          </p>
          <p className="panel-block">
            <ul>
              {questions[number].q.split('\n').map((line, i) => <li key={i}>{line}</li>)}
            </ul>
          </p>
          {isobjective
            ? (
              <RadioQuestion
                number={number}
                question={questions[number]}
                setAnswerToQuestion={setAnswerToQuestion}
              />
            )
            : (
              <TextQuestion
                showToast={showToast}
                number={number}
                question={questions[number]}
                setAnswerToQuestion={setAnswerToQuestion}
              />
            )}
        </article>
      </div>
    </div>
  );
}

export default Questionbox;
