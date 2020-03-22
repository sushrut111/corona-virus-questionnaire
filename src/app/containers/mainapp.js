import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css'
import Instructions from './instructions';
import Disclaimer from './disclaimer';
import LanguageSelector from '../components/languageSelector';
import questions from '../api/questions';
import Questionbox from './questionbox';
import {toast} from "bulma-toast";
import ResultTable from '../components/resultTable';
import analyzer from '../api/analyzer';
import Recommendations from '../components/Recommendations';
import recommendationText from "../api/recommendations";

function Mainapp() {
  const parts = ["disclaimer", "instructions", "questionnaire", "results"];
  const [part, setPart] = useState(0);
  const languages = Object.keys(questions);
  const [language, setLanguage] = useState(languages[0]);
  const [answers, updateAnswers] = useState([]);
  const [recommendations, updateRecommendations] = useState([]);
  const languageChange = (e) => {
    let newlang = e.target.value;
    if(part!=3){
      setPart(0);
      updateAnswers([]);
  
    }
    setLanguage(newlang);

    showToast("Language is changed to "+newlang);
  }
  const showToast = (msg) => {
    toast({
        message: msg,
        duration: 2000,
        position: "bottom-center",
        closeOnClick: true,
        opacity: 1
      });
  }
  const analyzeResponses = () => {
    updateRecommendations(analyzer(answers, language));
  }
  const handleTransition = () => {
    if(parts[part]=="questionnaire"){
      // analyzeResponses();
      //wait for analysis to be available
    }
    setPart(part+1);
  }
  const addAnswer = (ansobj) => {
    const temp = [...answers];
    temp.push(ansobj);
    updateAnswers(
      temp
    );
  }
  useEffect(()=>{
    //analyze when number of answes == number of questions
    //this makes sure that we have all the answers
    if(answers.length==questions[language].questions.length){
      analyzeResponses();
    }
  },[answers]);
  const renderSwitch = (part) => {
    switch(part){
      case 0:
        return <Disclaimer language={language} content={questions[language].disclaimer} handleTransition={handleTransition}/>
      case 1:
        return <Instructions language={language} content={questions[language].instructions} handleTransition={handleTransition}/>
      case 2:
        return <Questionbox showToast={showToast} language={language} content={questions[language].questions} addAnswer={addAnswer} handleTransition={handleTransition}/>;  
      case 3:
        return (
          <div>
          <div className="printbutton">
          <button className="button is-primary is-light printbutton" onClick={()=>window.print()}>Print the report</button>
          </div>
          <Recommendations recommendations={recommendations} language={language}/>
          <ResultTable language={language} questions={questions[language].questions} answers={answers}/>
          </div>
        )
      default:
        return <Disclaimer language={language} content={questions[language].disclaimer} handleTransition={handleTransition}/>

  
    }

  }
  return (

    <div className="container is-widescreen">
        <LanguageSelector languages={languages} languageChange={languageChange}></LanguageSelector>
        <div className="mid-cont" >
        {
          renderSwitch(part)
        }
      </div>
      
    </div>

    );
}

export default Mainapp;
