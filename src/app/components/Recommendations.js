import React, { useState } from 'react';
import general from '../api/generalRecom';

function Recommendations(props) {
  const { recommendations, language } = props;
  return (
    <div>
      <article className="message is-info">
        <div className="message-header">
          <p>{general[language][0]}</p>
        </div>
        <div className="message-body">
          {general[language].map((line, i) => ((i > 1)
            ? (line.search('href:') !== -1
              ? <a href={line.split('href:')[1]}>{line.split('href:')[1]}</a>
              : <div>{line}</div>)
            : ''
          ))}
        </div>
      </article>
      <article className={`message ${recommendations[0]}`}>
        <div className="message-header">
          <p>{recommendations[1]}</p>
        </div>
        <div className="message-body">
          {recommendations.map((line, i) => (
            (i > 1)
              ? (line.search('href:') !== -1
                ? <a href={line.split('href:')[1]}>{line.split('href:')[1]}</a>
                : <div>{line}</div>)
              : ''
          ))}
        </div>
      </article>
    </div>
  );
}
export default Recommendations;
