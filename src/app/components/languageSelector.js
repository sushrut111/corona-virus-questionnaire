import React, { useState } from "react";
import "bulma/css/bulma.css";
import "../../App.css";

function LanguageSelector(props) {
  const { languages, languageChange, goHome, part, language } = props;
  return (
    <section className="hero is-info is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div onClick={goHome} className="backButton">
                <i class="fas fa-arrow-circle-left fa-4x clickable"></i>
              </div>
              <h1 className="title heading1">
                GoCorona
              </h1>
              <h2 className="subtitle heading2">Corona go!!</h2>
            </div>
            <div>
              {part != 4 ? (
                <div className="select is-rounded is-pulled-right">
                  <select onChange={languageChange}>
                    {languages.map((lang, i) => {
                      return (
                        <option
                          key={i}
                          value={lang}
                          selected={language == lang}
                        >
                          {lang}
                        </option>
                      );
                    })}
                  </select>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LanguageSelector;
