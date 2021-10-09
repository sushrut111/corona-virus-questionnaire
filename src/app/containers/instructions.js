import React from 'react';
import 'bulma/css/bulma.css';
import '../../App.css';

function Instructions(props) {
  const { content, handleTransition } = props;

  return (
    <div className="box is-small">
      <article className="panel is-link">
        <p className="panel-heading">
          Instructions
        </p>
        {content.map((cont, i) => (
          <div className="panel-block" key={i}>
            <span className="panel-icon">
              <i className="fas fa-arrow-right" />

            </span>
            {cont}
          </div>
        ))}

        <div className="panel-block">
          <button className="button is-link is-outlined" onClick={handleTransition}>
            Start
          </button>
        </div>
      </article>
    </div>
  );
}

export default Instructions;
