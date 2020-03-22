import React from 'react';
import 'bulma/css/bulma.css';
import '../../App.css';
function Instructions(props) {
  const {content, handleTransition} = props;

    return (
            <div className="box is-small">
                    <article className="panel is-link">
  <p className="panel-heading">
    Instructions
  </p>
  {content.map((cont, i)=>{
    return (
      <div className="panel-block" key={i}>
    <span className="panel-icon">
      <i className="fas fa-arrow-right" ></i>
      
    </span>
    {cont}
  </div>
    )
  })

  }

  <div className="panel-block">
    <button className="button is-link is-outlined is-fullwidth" onClick={handleTransition}>
        Start the questionnaire
    </button>
  </div>
</article>
            </div>
        );
    }
    
    export default Instructions;
    