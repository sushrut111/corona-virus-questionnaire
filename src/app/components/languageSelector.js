import React, { useState } from 'react';
import 'bulma/css/bulma.css';

function LanguageSelector(props) {

    const {languages, languageChange, goHome, part, language} = props;
        return (
            <section className="hero is-info is-bold">
  <div className="hero-body">
    <div className="container">
      <div className="columns">
        <div className="column" onClick={goHome}>
        <h1 className="title">
        GoCorona
      </h1>
      <h2 className="subtitle">
        Corona go!!
      </h2>
        </div>
        <div>
        <div className="select is-rounded is-pulled-right">
                  
          {part!=4?<select onChange={languageChange} >
            {languages.map((lang, i)=>{
    
            return (<option key={i} value={lang} selected={language==lang}>{lang}</option>)
            })}
  </select>:""}
  
</div>
        </div>
      </div>
          
      

    </div>
  </div>
</section>
        );
    }
    
export default LanguageSelector;
    