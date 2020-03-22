import questions from "./questions";
import recommendationsall from "./recommendations";
const analyzer = (answers, language) => {
    const ansdict = {}
    const recommendations = recommendationsall[language];
    console.log(language);
    console.log(recommendationsall);
    answers.forEach(element => {
        ansdict[element.question] = element.answer;
    });
    console.log(ansdict);
    //5 6 8 no -> 3,4,6
    if(ansdict[3]==1 && ansdict[4]==1 && ansdict[6]==6){
        //not exposed
        if(ansdict[19]==0){
            //seek medical help immediately
            return recommendations.exposed.no.attention;
        }
        else{
            //10 14 16 20
            //8 12 14 18
            if(ansdict[8]==0 || ansdict[12]==0 || ansdict[14]==0 || ansdict[18]==0){
                // get in touch with physician
                return recommendations.exposed.no.getintouch;
            }
            else{
                /*
                Group A (Q9 or Q11 or Q18) Group B (Q12 or Q13) Group C (Q14) Group D (Q17) -- If Combination of 3: (A and B and C) or (B and C and D) or (A and C and D) or (A and B and D) - if yes, “Get in touch with a physician. The pdf version of the questionnaire can be forwarded to the doctor to provide detailed information regarding your symptoms, health and travel history. Please follow their recommendation.” if no, “Monitor your symptoms closely. If the symptoms worsen, please get in touch with a doctor. Quarantine yourself and avoid contact with other people.” 
                a-> 7 9 16
                b-> 10 11
                c-> 12 
                d-> 15
                */
               let A = (ansdict[7] == 0 || ansdict[9] == 0 || ansdict[16] == 0);
               let B = (ansdict[10] == 0 || ansdict[11] == 0);
               let C = (ansdict[12] == 0);
               let D = (ansdict[15] == 0);
               if (A || B || C || D){
                   //get in touch with physician
                   return recommendations.exposed.no.getintouch;
               }
               else
               {    
                   let need_monitor = false;
                   for(let i=7; i<20;i++){
                       if(ansdict[i]==0){
                            need_monitor = true;
                       }
                   }
                   if(need_monitor){
                       //monitor closely
                       return recommendations.exposed.no.monitor;
                   }
                   else
                   {
                       //stay at home
                       return recommendations.exposed.no.stayhome;
                   }
                }

            }
        }
    }
    else{
        //exposed
        if(ansdict[19]==0){
            //seek medical help immediately
            return recommendations.exposed.yes.attention;
        }
        else{
            let need_monitor = false;
            for(let i=7; i<20;i++){
                if(ansdict[i]==0){
                     need_monitor = true;
                }
            }
            if(need_monitor){
                return recommendations.exposed.yes.getintouch;
            }
            else
            {   
                return recommendations.exposed.yes.stayhome;

            }
        }
    }
}
export default analyzer;