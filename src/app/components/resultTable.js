import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import '../../App.css';
import getclass from '../api/questionclasses';
function ResultTable(props) {
        const {language, questions, answers} = props;
        return (
            <table className="table is-striped is-hoverable is-fullwidth">
                <thead>
                    <tr>
                    <th>Sr. No.</th>
                    <th>Question</th>
                    <th>Response</th>

                    </tr>
                 </thead>
                <tbody>
                    {answers.map((answer, i)=>{
                        let ques = questions[answer.question];
                        return (<tr key={i} className={getclass(i)}>
                            <td>{i+1}</td>
                            <td><ul>{ques.q.split('\n').map((line, i)=>{
                                return <li key={i}>{line}</li>
                            })}</ul></td>
                            <td>{ques.objective?ques.options[answer.answer]:answer.answer}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        );
    }
    
export default ResultTable;
    