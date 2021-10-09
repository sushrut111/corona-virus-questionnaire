import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '../../App.css';
import getclass from '../api/questionclasses';

function ResultTable(props) {
  const { language, questions, answers } = props;
  return (
    <div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Color codes
          </p>

        </header>
        <div className="card-content">
          <div className="content columns">
            <div className="column">General questions</div>
            <div className="column rowexpose">Questions related to exposure</div>
            <div className="column rowsymp">Questions related to symptoms</div>
            <div className="column rowrisk">Questions related to medical history for risk factors</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <table className="table is-striped is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Question</th>
            <th>Response</th>

          </tr>
        </thead>
        <tbody>
          {answers.map((answer, i) => {
            const ques = questions[answer.question];
            return (
              <tr key={i} className={getclass(i)}>
                <td>{i + 1}</td>
                <td>
                  <ul>
                    {ques.q.split('\n').map((line, j) => <li key={j}>{line}</li>)}
                  </ul>
                </td>
                <td>{ques.objective ? ques.options[answer.answer] : answer.answer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;
