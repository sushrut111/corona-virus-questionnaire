import React from 'react';
import 'bulma/css/bulma.css';
import '../../App.css';

function Disclaimer(props) {
  const { content, handleTransition } = props;
  return (
    <div className="box is-small">
      <article className="panel is-danger">
        <p className="panel-heading">
          Disclaimer
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
          <button className="button is-danger is-outlined" onClick={handleTransition}>
            I understand
          </button>
        </div>
      </article>
    </div>
  );
}

export default Disclaimer;
