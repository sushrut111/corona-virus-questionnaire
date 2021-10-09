import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import { toast } from 'bulma-toast';
import Instructions from './instructions';
import Disclaimer from './disclaimer';
import Landing from './Landing';
import LanguageSelector from '../components/languageSelector';
import questions from '../api/questions';
import Questionbox from './questionbox';
import ResultTable from '../components/resultTable';
import analyzer from '../api/analyzer';
import Recommendations from '../components/Recommendations';
import recommendationText from '../api/recommendations';

function Mainapp() {
  const parts = ['disclaimer', 'instructions', 'questionnaire', 'results'];
  const [part, setPart] = useState(4);
  const languages = Object.keys(questions);
  const [language, setLanguage] = useState(languages[0]);
  const [answers, updateAnswers] = useState([]);
  const [recommendations, updateRecommendations] = useState([]);

  const showToast = (msg) => {
    toast({
      message: msg,
      duration: 2000,
      position: 'bottom-center',
      closeOnClick: true,
      opacity: 1,
    });
  };
  const languageChange = (e) => {
    const newlang = e.target.value;
    if (part !== 3) {
      setPart(0);
      updateAnswers([]);
    }
    if (part === 3) {
      updateRecommendations(analyzer(answers, newlang));
    }

    setLanguage(newlang);

    showToast(`Language is changed to ${newlang}`);
  };
  const gohome = () => {
    updateAnswers([]);
    setPart(4);
  };
  const retake = () => {
    updateAnswers([]);
    setPart(0);
  };
  const analyzeResponses = () => {
    updateRecommendations(analyzer(answers, language));
  };
  const handleTransition = () => {
    if (parts[part] === 'questionnaire') {
      // analyzeResponses();
      // wait for analysis to be available
    }
    if (part === 4) {
      setPart(0);
    } else if (part < 4) setPart(part + 1);
    else {
      setPart(4);
    }
  };
  const addAnswer = (ansobj) => {
    const temp = [...answers];
    temp.push(ansobj);
    updateAnswers(temp);
  };
  useEffect(() => {
    // analyze when number of answes === number of questions
    // this makes sure that we have all the answers
    if (answers.length === questions[language].questions.length) {
      analyzeResponses();
    }
  }, [answers]);
  const renderSwitch = (part) => {
    switch (part) {
      case 0:
        return (
          <Disclaimer
            language={language}
            content={questions[language].disclaimer}
            handleTransition={handleTransition}
          />
        );
      case 1:
        return (
          <Instructions
            language={language}
            content={questions[language].instructions}
            handleTransition={handleTransition}
          />
        );
      case 2:
        return (
          <Questionbox
            showToast={showToast}
            language={language}
            content={questions[language].questions}
            addAnswer={addAnswer}
            handleTransition={handleTransition}
          />
        );
      case 3:
        return (
          <div>
            <div className="printbutton">
              <center>
                <button
                  className="button is-danger is-light printbutton"
                  onClick={() => window.print()}
                >
                  Print the report
                </button>
                <button
                  className="button is-success is-light printbutton"
                  onClick={retake}
                >
                  Retake the quiz!
                </button>
              </center>
              <br />
              <Recommendations
                recommendations={recommendations}
                language={language}
              />
            </div>
            <br />
            <br />
            <ResultTable
              language={language}
              questions={questions[language].questions}
              answers={answers}
            />
          </div>
        );
      default:
        return <Landing handleTransition={handleTransition} />;
    }
  };
  return (
    <div className="container is-widescreen">
      <LanguageSelector
        languages={languages}
        languageChange={languageChange}
        goHome={gohome}
        part={part}
        language={language}
      />
      <div className="mid-cont">{renderSwitch(part)}</div>
    </div>
  );
}

export default Mainapp;
