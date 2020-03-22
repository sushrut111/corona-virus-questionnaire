import React, { useState } from 'react';
function Recommendations(props) {
    const {recommendations} = props;
    return (
        <article className={"message "+recommendations[0]}>
            <div className="message-header">
                <p>{recommendations[1]}</p>
            </div>
            <div className="message-body">
            {recommendations.map((line, i)=>{
                return (i>1)?(line.search("href:")!=-1?<a href={line.split("href:")[1]}>{line.split("href:")[1]}</a>:<div>{line}</div>):"";
            })
            }
            </div>
        </article>
        );
}
export default Recommendations;
