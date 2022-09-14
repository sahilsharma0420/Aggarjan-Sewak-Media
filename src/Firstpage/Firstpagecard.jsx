import React from "react";
import "./Firstpage.css"
const Firstpagecard = (props) => {
    return(
        <>
            {props.details.map((value,index) => (
                <div className="options-card" key={index}>
                   
                       <div className={`options${value.id}`}>
                     
                        <img className="cardimages" src={value.optionsimage} alt="not found"/>
                        <p className="fifthpage-options-values">{value.optionsname}</p>
                        </div>
                </div>
            ))};
        </>
    );
};
export default  Firstpagecard;
